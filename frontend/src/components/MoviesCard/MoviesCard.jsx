import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL, PAGES } from '../../utils/constants';
import Button from '../Button/Button';
import CustomLink from '../CustomLink/CustomLink';
import formatDuration from '../../utils/formatDuration';

import './MoviesCard.css';

function MoviesCard({ languageLocal, btnType, movie, handleLikeMovieClick }) {
  const { lng } = languageLocal.load();
  const [movieId, setMovieId] = useState('');
  const isSavedMovies = useLocation().pathname === PAGES.SAVED_MOVIES;
  const imageUrl =
    movie.thumbnail || `${BASE_URL}/${movie.image.formats.thumbnail.url}`;

  useEffect(() => {
    if (movie._id) setMovieId(movie._id);
  }, [movie._id]);

  const clickLikeButton = () => {
    if (isSavedMovies) {
      handleLikeMovieClick(movieId);
    } else {
      const movieData = {
        country: movie.country || '-',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: BASE_URL + movie.image.url,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || '-',
        thumbnail: BASE_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      };

      handleLikeMovieClick(movieId, movieData).then((likedMovie) => {
        setMovieId(movieId ? '' : likedMovie._id);
      });
    }
  };

  return (
    <article className="movie">
      <div className="movie__container">
        <div className="movie__wrapper">
          <p className="movie__title">
            {!lng || lng === 'en' ? movie.nameEN : movie.nameRU}
          </p>
          <p className="movie__subtitle">{formatDuration(movie.duration)}</p>
        </div>
        <Button
          className={`movie__btn ${btnType} ${
            movieId && !isSavedMovies ? 'movie__save-btn_active' : ''
          }`}
          onClick={clickLikeButton}
        />
      </div>
      <CustomLink
        className="movie__link"
        path={movie.trailerLink || movie.trailer}
      >
        <img className="movie__image" src={imageUrl} alt={movie.nameRU} />
      </CustomLink>
    </article>
  );
}

export default MoviesCard;
