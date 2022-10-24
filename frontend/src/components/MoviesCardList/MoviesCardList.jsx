import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import './MoviesCardList.css';

function MoviesCardList({
  languageLocal,
  loading,
  btnType,
  cards,
  handleLikeMovieClick,
  message,
}) {
  if (loading) return <Preloader />;
  if ((message && !loading) || !cards)
    return <p className="movie-cards__alert">{message}</p>;

  return (
    <section className="movie-cards">
      {cards?.map((movie) => (
        <MoviesCard
          languageLocal={languageLocal}
          key={movie.id || movie.movieId}
          movie={movie}
          btnType={btnType}
          handleLikeMovieClick={handleLikeMovieClick}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
