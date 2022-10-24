function formatLikedMovies(movies) {
  return movies.map((movie) => ({
    movieId: movie.movieId,
    _id: movie._id,
  }));
}

function setLike(movies, likedMovies) {
  return movies.map((movie) => {
    let isLike = false;
    let _id = null;

    likedMovies.forEach((likedMovie) => {
      isLike = movie.id === likedMovie.movieId;
      if (isLike) _id = likedMovie._id;
    });

    return { ...movie, _id };
  });
}

export { formatLikedMovies, setLike };
