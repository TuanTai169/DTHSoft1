// VALIDATION
const Joi = require("@hapi/joi")

//Create User Validation
const userValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(10).required().email(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().min(10),
    address: Joi.string(),
    image: Joi.string(),
    roles: Joi.string(),
  })
  return schema.validate(data)
}

//Create Customer Validation
const customerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(10).required().email(),
    phone: Joi.string().min(10).required(),
    cmnd: Joi.string(),
    address: Joi.string().min(10),
    gender: Joi.string(),
    birthDate: Joi.date(),
    note: Joi.string(),
  })
  return schema.validate(data)
}

module.exports.userValidation = userValidation
module.exports.customerValidation = customerValidation
