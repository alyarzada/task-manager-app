const { createCustomError } = require("../errors/customError");
const httpStatusCodes = require("../errors/httpStatusCodes");
const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/asyncHandler");
const jwt = require("jsonwebtoken");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/assets");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

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

  res.status(200).send({
    message: "login successfully",
    userData: {
      token,
      user_id: user._id,
    },
  });
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

// changeAvatar handler
const changeAvatar = asyncHandler(async (req, res) => {
  const user_id = req.params.id;

  // get user
  const user = await User.findById(user_id);

  // change avatar
  user.avatar = req.file.filename;

  // update user
  const response = await User.findByIdAndUpdate(user_id, user, { new: true });

  res.status(200).send({ message: "Avatar changed successfully", response });
});

module.exports = { login, register, changeAvatar, upload };
