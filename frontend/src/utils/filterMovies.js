const filterMovies = (
  movies,
  shortDuration,
  { movie: searchQuery, short: isShort }
) =>
  movies.filter((movie) => {
    const isShortMovie = movie.duration <= shortDuration;
    const movieName = movie.nameRU.toLowerCase();
    let search;
    if (searchQuery) search = searchQuery.toLowerCase();
    else search = ' ';

    return isShort
      ? movieName.includes(search) && isShortMovie
      : movieName.includes(search);
  });

export default filterMovies;
