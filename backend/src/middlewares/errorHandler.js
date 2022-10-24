const { STATUS, MESSAGE } = require('../utils/constants');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const { statusCode = STATUS.INTERNAL_SERVER_ERROR, message } = err;

  res.status(statusCode).send({
    message:
      statusCode === STATUS.INTERNAL_SERVER_ERROR
        ? MESSAGE.INTERNAL_SERVER_ERROR
        : message,
  });
};

module.exports = { errorHandler };
