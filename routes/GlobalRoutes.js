const express = require("express");
const { userRegisterValidation } = require("../utils/uservalidation");

const { registerUser } = require("../controller/user");
const router = express.Router();

// Users Routes
router.post("/api/register", userRegisterValidation, registerUser);

module.exports = router;
