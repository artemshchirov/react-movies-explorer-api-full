const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const { MESSAGE } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(`${MESSAGE.UNAUTHORIZED} 1`);
  }

  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError(`${MESSAGE.UNAUTHORIZED} 2`);
  }

  req.user = payload;

  next();
};
