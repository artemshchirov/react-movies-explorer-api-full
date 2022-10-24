const bcrypt = require('bcrypt');
const { User } = require('../models/userModels');
const { jwtSign } = require('../utils/jwtSign');
const { STATUS, MESSAGE, SALT_ROUND } = require('../utils/constants');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');

exports.createUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, SALT_ROUND);
    const newUser = await User.create({
      email,
      password: hashPassword,
      name,
    });
    res.status(STATUS.CREATED).send({
      newUser: {
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      next(new ConflictError(MESSAGE.NOT_UNIQUE_EMAIL));
    }
    if (err.name === 'ValidationError') {
      next(new BadRequestError(MESSAGE.INVALID_USER_DATA));
    }
    next(err);
  }
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwtSign(user._id);
      res.send({ token });
    })
    .catch(next);
};

exports.getCurrentUser = (req, res, next) => {
  const { id } = req.user;
  User.findById(id)
    .orFail(() => {
      throw new NotFoundError(MESSAGE.USER_NOT_FOUND);
    })
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

exports.updateProfile = async (req, res, next) => {
  const { email, name } = req.body;
  const { id } = req.user;
  try {
    const profile = await User.findByIdAndUpdate(
      id,
      {
        email,
        name,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    res.send({ profile });
  } catch (err) {
    if (err.code === 11000) {
      next(new ConflictError(MESSAGE.NOT_UNIQUE_EMAIL));
    } else if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new BadRequestError(MESSAGE.INVALID_USER_DATA));
    }
    next(err);
  }
};
