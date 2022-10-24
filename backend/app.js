require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { limiter } = require('./src/middlewares/rateLimit');
const { routes } = require('./src/routes');
const { errorHandler } = require('./src/middlewares/errorHandler');
const {
  requestLogger,
  errorLogger,
  consoleLogger,
} = require('./src/middlewares/logger');
const { MONGO_URL } = require('./config');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => console.log(`Connected to ${MONGO_URL}`))
  .catch((err) => {
    throw new Error(err.message);
  });

app.use(consoleLogger);
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT);
console.log(`Server listen on ${PORT}`);
