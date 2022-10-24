const SALT_ROUND = 10;

const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  AUTHORIZED_BUT_FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGE = {
  INVALID_USER_DATA: '400 Invalid User Data',
  INVALID_MOVIE_DATA: '400 Invalid Movie Data',
  UNAUTHORIZED: '401 Unauthorized',
  UNAUTHORIZED_LOGIN: '401 Invalid Email or Password',
  AUTHORIZED_BUT_FORBIDDEN: '403 Authorized But Forbidden',
  USER_NOT_FOUND: '404 User Not Found',
  MOVIE_NOT_FOUND: '404 Movie Not Found',
  PAGE_NOT_FOUND: '404 Page Not Found',
  NOT_UNIQUE_EMAIL: '409 Not Unique Email',
  INTERNAL_SERVER_ERROR: '500 Internal Server Error',
};

module.exports = { STATUS, MESSAGE, SALT_ROUND };
