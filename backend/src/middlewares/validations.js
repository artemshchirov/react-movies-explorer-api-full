const { Joi, celebrate } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().trim(true).email()
      .messages({
        'any.required': 'The "email" field must be filled',
      }),
    password: Joi.string().required().trim(true)
      .messages({
        'any.required': 'The "password" field must be filled',
      }),
    name: Joi.string().required().trim(true).min(2)
      .max(30)
      .messages({
        'string.min': 'The minimum length of the "name" field is 2',
        'string.max': 'The maximum length of the "name" field is 30',
        'any.required': 'The "name" field must be filled',
      }),
  }),
});

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().trim(true).email()
      .messages({
        'string.required': 'The "email" field must be filled',
        'any.required': 'The "email" field must be filled',
      }),
    password: Joi.string().required().trim(true)
      .messages({
        'any.required': 'The "password" field must be filled',
      }),
  }),
});

const validateUserData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().trim(true).email()
      .messages({
        'string.required': 'The "email" field must be filled',
        'any.required': 'The "email" field must be filled',
      }),
    name: Joi.string().required().trim(true).min(2)
      .max(30)
      .messages({
        'string.min': 'The minimum length of the "name" field is 2',
        'string.max': 'The maximum length of the "name" field is 30',
        'any.required': 'The "name" field must be filled',
      }),
  }),
});

const validateNewMovieData = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().trim(true).messages({
      'any.required': 'The "country" field must be filled',
    }),
    director: Joi.string().required().trim(true).messages({
      'any.required': 'The "director" field must be filled',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'The "duration" field must be filled',
    }),
    year: Joi.string().required().trim(true).messages({
      'any.required': 'The "year" field must be filled',
    }),
    description: Joi.string().required().trim(true).messages({
      'any.required': 'The "description" field must be filled',
    }),
    image: Joi.string()
      .required()
      .trim(true)
      .custom((value, helpers) => {
        if (validator.isURL(value)) return value;
        return helpers.message('The "image" field must be valid URL');
      }),
    trailer: Joi.string()
      .required()
      .trim(true)
      .custom((value, helpers) => {
        if (validator.isURL(value)) return value;
        return helpers.message('The "trailer" field must be valid URL');
      }),
    nameRU: Joi.string().required().trim(true).messages({
      'any.required': 'The "nameRU" field must be filled',
    }),
    nameEN: Joi.string().required().trim(true).messages({
      'any.required': 'The "nameEN" field must be filled',
    }),
    thumbnail: Joi.string()
      .required()
      .trim(true)
      .custom((value, helpers) => {
        if (validator.isURL(value)) return value;
        return helpers.message('The "thumbnail" field must be valid URL');
      }),
    movieId: Joi.number().required().messages({
      'any.required': 'The "movieId" field must be filled',
    }),
  }),
});

const validateObjId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string()
      .required()
      .trim(true)
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) return value;
        return helpers.message('The "movieId" must be valid');
      }),
  }),
});

module.exports = {
  validateUserBody,
  validateAuthentication,
  validateUserData,
  validateNewMovieData,
  validateObjId,
};
