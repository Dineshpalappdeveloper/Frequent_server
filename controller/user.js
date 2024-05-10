const UserModel = require("../models/userModel");
const registerUser = async (req, res) => {
  //   const userModel = new UserModel(req.body);
  try {
    const response = await UserModel.create(req.body);
    res
      .status(201)
      .send({ message: "welcome user ", response: response, data: req.body });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  registerUser,
};
