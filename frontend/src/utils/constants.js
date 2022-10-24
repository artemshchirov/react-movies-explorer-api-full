const VALIDATION_PARAMS = {
  REGEX: {
    NAME: /^[a-zа-яё-\s]+$/i,
    EMAIL: /[^@\s]+@[^@\s]+\.[^@\s]+/i,
  },
  MESSAGES: {
    NAME: {
      EN: 'Username can use only letters, space and "-"',
      RU: 'Имя может состоять только из букв, пробелов и "-"',
    },
    EMAIL: {
      EN: 'Enter valid email',
      RU: 'Неправильный формат e-mail',
    },
    PASSWORD: {
      EN: 'Password field is empty',
      RU: 'Минимальная длина пароля: 1 символ',
    },
  },
};

const VALIDATION_CONFIGS = {
  USER_DATA: {
    INPUTS: ['name', 'email'],
    REGEX: {
      name: VALIDATION_PARAMS.REGEX.NAME,
      email: VALIDATION_PARAMS.REGEX.EMAIL,
    },
    MESSAGES: {
      name: VALIDATION_PARAMS.MESSAGES.NAME.EN,
      email: VALIDATION_PARAMS.MESSAGES.EMAIL.EN,
    },
  },

  LOGIN: {
    INPUTS: ['email'],
    REGEX: {
      email: VALIDATION_PARAMS.REGEX.EMAIL,
    },
    MESSAGES: {
      email: VALIDATION_PARAMS.MESSAGES.EMAIL,
    },
  },
};

const MESSAGES = {
  NOT_FOUND: {
    EN: 'Nothing not found',
    RU: 'Ничего не найдено',
  },
  ERROR: {
    EN: 'An error occurred during your request. Maybe you have connection problem or server is not available. Wait a bit and try again',
    RU: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  },
};

const ALERT_MESSAGES = {
  SUCCESSFULLY: {
    UPDATE_PROFILE: {
      EN: 'The changes are saved successfully',
      RU: 'Данные пользователя успешно обновлены',
    },
  },
  ERROR: {
    AUTH: {
      EN: 'Invalid username or password',
      RU: 'Неправильные почта или пароль',
    },
    GET_USER: {
      EN: 'Error while fetching user data',
      RU: 'Не удалось получить данные пользователя',
    },
    ADD_FILM: {
      EN: 'Error while adding movie',
      RU: 'Не удалось добавить фильм',
    },
    DELETE_FILM: {
      EN: 'Error while deleting movie',
      RU: 'Не удалось удалить фильм',
    },
    SEARCH_QUERY: {
      EN: 'You need to type a key word',
      RU: 'Нужно ввести ключевое слово',
    },
    UPDATE_PROFILE: {
      EN: 'Error while updating profile',
      RU: 'Не удалось обновить данные профиля',
    },
  },
};

const PAGES = {
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MAIN: '/',
};

const CARD_COUNT = {
  SMALL_DEVICE: {
    ADD: 2,
    START: 5,
  },
  MIDDLE_DEVICE: {
    ADD: 2,
    START: 8,
  },
  BIG_DEVICE: {
    ADD: 3,
    START: 12,
  },
};

const CARD_BREAKPOINT = {
  TWO: 1000,
  ONE: 700,
};

const BASE_URL = 'https://api.nomoreparties.co';

const SHORT_DURATION = 40;

export {
  MESSAGES,
  PAGES,
  BASE_URL,
  CARD_COUNT,
  CARD_BREAKPOINT,
  SHORT_DURATION,
  ALERT_MESSAGES,
  VALIDATION_PARAMS,
  VALIDATION_CONFIGS,
};

// const VALIDATION_PARAMS = {
//   REGEX: {
//     NAME: /^[a-zа-яё-\s]+$/i,
//     EMAIL: /[^@\s]+@[^@\s]+\.[^@\s]+/i,
//   },
//   MESSAGES: {
//     NAME: 'Имя может состоять только из букв, пробелов и "-"',
//     EMAIL: 'Неправильный формат e-mail',
//     PASSWORD: 'Минимальная длина пароля: 1 символ',
//   },
// };

// const MESSAGES = {
//   NOT_FOUND: 'Ничего не найдено',
//   ERROR:
//     'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
// };

// const ALERT_MESSAGES = {
//   SUCCESSFULLY: {
//     UPDATE_PROFILE: 'Данные пользователя успешно обновлены',
//   },
//   ERROR: {
//     AUTH: 'Неправильные почта или пароль',
//     GET_USER: 'Не удалось получить данные пользователя',
//     ADD_FILM: 'Не удалось добавить фильм',
//     DELETE_FILM: 'Не удалось удалить фильм',
//     SEARCH_QUERY: 'Нужно ввести ключевое слово',
//     UPDATE_PROFILE: 'Не удалось обновить данные профиля',
//   },
// };

// ERROR: {
//   UPDATE_PROFILE: 'Error while updating profile',
//   SEARCH_QUERY: 'Keyword required',
//   DELETE_FILM: 'Error while deleting movie',
//   ADD_FILM: 'Error while adding movie',
//   GET_USER: 'Error while get user data',
//   AUTH: 'Incorrect email or password',
// },
