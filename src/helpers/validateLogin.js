const Joi = require('joi');

const validateBodyLogin = (data) =>
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate(data);

module.exports = {
    validateBodyLogin,
};