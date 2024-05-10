const UserModel = require("../models/userModel");
require("dotenv").config();
const registerUser = async (req, res) => {
  //   const userModel = new UserModel(req.body);
  try {
    res.status(201).send({ message: "welcome user ", data: req.body });
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = {
  registerUser,
};
