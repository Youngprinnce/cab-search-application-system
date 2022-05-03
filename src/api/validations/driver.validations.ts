import Joi from 'joi';

// eslint-disable-next-line no-useless-escape
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const driverSchema = Joi.object().keys({
  name: Joi.string().max(50).min(2),
  email: Joi.string().email().regex(emailRegExp).required(),
  phone_number: Joi.number().integer().min(1000000000).max(9999999999)
    .required(),
  license_number: Joi.string().required(),
  car_number: Joi.string().required(),
});

export { driverSchema };
