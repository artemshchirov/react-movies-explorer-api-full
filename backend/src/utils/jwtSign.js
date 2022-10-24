const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../../config');

exports.jwtSign = (id) => jwt.sign({ id }, JWT_SECRET, {
  expiresIn: '7d',
});
