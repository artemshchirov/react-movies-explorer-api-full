const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 250,
  message: 'You have exceeded the 100 requests in 15 min limit!',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { limiter };
