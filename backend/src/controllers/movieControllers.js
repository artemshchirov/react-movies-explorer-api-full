const { Movie } = require('../models/movieModels');
const { STATUS, MESSAGE } = require('../utils/constants');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

exports.getCurrentUserMovies = async (req, res, next) => {
  const { id } = req.user;

  try {
    const movies = await Movie.find({ owner: id });
    res.send(movies);
  } catch (err) {
    next(err);
  }
};

exports.createMovie = async (req, res, next) => {
  const { id } = req.user;

  try {
    const newMovie = await Movie.create({
      ...req.body,
      owner: id,
    });
    newMovie.populate('owner');
    res.status(STATUS.CREATED).send(newMovie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError(MESSAGE.INVALID_MOVIE_DATA));
    } else {
      next(err);
    }
  }
};

exports.deleteMovieById = async (req, res, next) => {
  const { movieId } = req.params;

  try {
    const movie = await Movie.findByIdAndRemove(movieId).orFail(() => {
      throw new NotFoundError(MESSAGE.MOVIE_NOT_FOUND);
    });
    res.send(movie);
  } catch (err) {
    next(err);
  }
};
