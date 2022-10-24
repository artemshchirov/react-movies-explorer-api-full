import { useState, useEffect } from 'react';

import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';

import './SavedMovies.css';

import filterMovies from '../../utils/filterMovies';
import { MESSAGES, SHORT_DURATION } from '../../utils/constants';

function SavedMovies({
  languageLocal,
  requestLikeMovies,
  searchQuerySavedMoviesLocal,
  handleLikeMovieClick,
  showAlert,
}) {
  const [loading, setLoading] = useState(false);

  const [likedMovies, setLikedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getLikeMovies();
  }, []);

  const setAllMovies = (movies) => {
    setLikedMovies(movies);
    setDisplayedMovies(movies);
  };

  const getLikeMovies = () => {
    setLoading(true);
    requestLikeMovies()
      .then((movies) => {
        setAllMovies(movies);
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
    const movies = filterMovies(likedMovies, SHORT_DURATION, values);
    setDisplayedMovies(movies);
    if (movies?.length) setErrorMessage('');
    else setErrorMessage(MESSAGES.NOT_FOUND.EN);
    // else setErrorMessage(t("search__btn"));
  };

  const handleDeleteMovie = (movieId) => {
    handleLikeMovieClick(movieId).then(() =>
      setAllMovies(likedMovies.filter((movie) => movie._id !== movieId))
    );
  };

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader languageLocal={languageLocal} />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQuerySavedMoviesLocal}
            showAlert={showAlert}
          />
          <MoviesCardList
            languageLocal={languageLocal}
            loading={loading}
            cards={displayedMovies}
            btnType="movie__btn_type_delete"
            handleLikeMovieClick={handleDeleteMovie}
            message={errorMessage}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
export default SavedMovies;
