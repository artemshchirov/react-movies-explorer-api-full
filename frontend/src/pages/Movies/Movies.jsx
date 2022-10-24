import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

import useCardCount from '../../hooks/useCardCount';
import filterMovies from '../../utils/filterMovies';
import { formatLikedMovies, setLike } from '../../utils/likes';
import {
  MESSAGES,
  CARD_COUNT,
  CARD_BREAKPOINT,
  SHORT_DURATION,
} from '../../utils/constants';

import './Movies.css';

function Movies({
  moviesLocal,
  languageLocal,
  searchQueryLocal,
  requestAllMovies,
  requestLikeMovies,
  handleLikeMovieClick,
  showAlert,
}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const [queryValues, setQueryValues] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const { countAddMovies, startCountMovies, setParamsCountMovies } =
    useCardCount(CARD_COUNT, CARD_BREAKPOINT);

  useEffect(() => {
    getLikeMovies();
    setParamsCountMovies('all');
    window.addEventListener('resize', setParamsCountMovies);
    return () => window.removeEventListener('resize', setParamsCountMovies);
  }, []);

  // Load movies from local storage
  useEffect(() => {
    if (likedMovies && !loading) {
      const localMovies = moviesLocal.load();
      setFilteredMovieList(localMovies);
    }
  }, [likedMovies, loading]);

  // Filter movies
  useEffect(() => {
    if (movieList?.length && queryValues) {
      const movies = filterMovies(movieList, SHORT_DURATION, queryValues);
      moviesLocal.save(movies);
      setFilteredMovieList(movies);

      if (movies?.length) setErrorMessage('');
      else setErrorMessage(MESSAGES.NOT_FOUND.EN);
    }
  }, [movieList, queryValues]);

  // Show movies
  useEffect(() => {
    if (filteredMovieList?.length) {
      const movies = setLike(filteredMovieList, likedMovies);
      setDisplayedMovies([...movies.slice(0, startCountMovies)]);
    }
  }, [filteredMovieList, startCountMovies]);

  const getLikeMovies = () => {
    setLoading(true);
    requestLikeMovies()
      .then((movies) => {
        setLikedMovies(formatLikedMovies(movies));
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage(MESSAGES.ERROR.EN);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllMovies = () => {
    setLoading(true);
    requestAllMovies()
      .then((movies) => {
        setMovieList(movies);
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage(MESSAGES.ERROR.EN);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFindMovies = (values) => {
    if (!movieList?.length) getAllMovies();
    setQueryValues(values);
  };

  const showMoreMovies = () => {
    const startIndex = displayedMovies.length;
    const endIndex = startIndex + countAddMovies;

    setDisplayedMovies([
      ...displayedMovies,
      ...filteredMovieList.slice(startIndex, endIndex),
    ]);
  };

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader languageLocal={languageLocal} />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQueryLocal}
            showAlert={showAlert}
          />
          <MoviesCardList
            languageLocal={languageLocal}
            loading={loading}
            cards={displayedMovies}
            btnType="movie__btn_type_save"
            handleLikeMovieClick={handleLikeMovieClick}
            message={errorMessage}
          />
          <section className="movies__load">
            {filteredMovieList &&
              filteredMovieList?.length > 3 &&
              filteredMovieList?.length !== displayedMovies?.length && (
                <Button
                  className="movies__btn"
                  btnType="movie__btn_type_save"
                  title={t('movies__btn')}
                  onClick={showMoreMovies}
                />
              )}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Movies;
