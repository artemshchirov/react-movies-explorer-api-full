const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { MESSAGE } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'The "email" field must be filled'],
    unique: [true, 'The "email" field must be unique'],
    validate: {
      validator(text) {
        return validator.isEmail(text);
      },
      message: 'Invalid Email Format',
    },
  },
  password: {
    type: String,
    select: false,
    required: [true, 'The "password" field must be filled'],
  },
  name: {
    type: String,
    required: [true, 'The "name" field must be filled'],
    minlength: [2, 'The minimum length of the "name" field is 2'],
    maxlength: [30, 'The maximum length of the "name" field is 30'],
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password,
  next,
) {
  return this.findOne({ email })
    .select('+password')
    .orFail(() => {
      throw new UnauthorizedError(`${MESSAGE.UNAUTHORIZED_LOGIN} 1`);
    })
    .then((user) => bcrypt
      .compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          throw new UnauthorizedError(`${MESSAGE.UNAUTHORIZED_LOGIN} 2`);
        }

        return user;
      })
      .catch(next));
};

exports.User = mongoose.model('user', userSchema);
