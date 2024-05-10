const joi = require("joi");

const userRegisterValidation = (req, res, next) => {
  const schema = joi.object({
    firstname: joi.string().min(3).max(100).required(),
    lastname: joi.string().min(3).max(100),
    email: joi.string().email().required(),
    country: joi.string().min(3).max(100).required(),
    state: joi.string().min(3).max(100).required(),
    city: joi.string().min(3).max(100).required(),
    gender: joi.string().min(3).max(100).required(),
    dob: joi.date().required().greater("1-1-1925").less("1-1-2010"),
    age: joi.number().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: "bad request", error: error });
  }
  next();
};

module.exports = { userRegisterValidation };
