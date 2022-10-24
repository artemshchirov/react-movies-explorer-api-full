const { Movie } = require('../models/movieModels');
const { MESSAGE } = require('../utils/constants');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');

exports.validateMovieOwner = async (req, res, next) => {
  const { id } = req.user;
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId).orFail(() => {
      throw new NotFoundError(MESSAGE.MOVIE_NOT_FOUND);
    });
    if (id !== movie.owner.toString()) {
      throw new ForbiddenError(MESSAGE.AUTHORIZED_BUT_FORBIDDEN);
    }
  } catch (err) {
    next(err);
  }
  next();
};
