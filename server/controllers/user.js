const { createCustomError } = require("../errors/customError");
const httpStatusCodes = require("../errors/httpStatusCodes");
const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/asyncHandler");
const jwt = require("jsonwebtoken");

// login handler
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    createCustomError("All fields must be filled", httpStatusCodes.BAD_REQUEST);
  }

  // email
  const user = await User.findOne({ email });

  if (!user) {
    createCustomError("Invalid credentials", httpStatusCodes.BAD_REQUEST);
  }

  // password
  const match = bcrypt.compare(password, user.password);

  if (!match) {
    createCustomError("Invalid credentials", httpStatusCodes.BAD_REQUEST);
  }

  // generate access token
  const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "3d",
  });

  res.status(200).send({ message: "login successfully", token });
});

// register handler
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // validation
  if (!username || !email || !password) {
    createCustomError("All fields must be filled", httpStatusCodes.BAD_REQUEST);
  }

  if (!validator.isEmail(email)) {
    createCustomError("Email is not valid", httpStatusCodes.BAD_REQUEST);
  }

  if (!validator.isStrongPassword(password)) {
    createCustomError("Password is not strong", httpStatusCodes.BAD_REQUEST);
  }

  // if email is not same
  const userExists = await User.findOne({ email });

  if (userExists) {
    createCustomError("Email already exists", httpStatusCodes.BAD_REQUEST);
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // user save
  const user = await User.create({ ...req.body, password: hash });

  res.status(200).send({ message: "register successfully", user });
});

module.exports = { login, register };
