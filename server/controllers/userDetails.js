const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/userModel");
const fs = require("fs");

// // changeAvatar handler
// const changeAvatar = asyncHandler(async (req, res) => {
//   const user_id = req.params.id;

//   // get user
//   const user = await User.findById(user_id);

//   // change avatar
//   user.avatar = req.file.filename;

//   // update user
//   const response = await User.findByIdAndUpdate(user_id, user, { new: true });

//   res.status(200).send({ message: "Avatar changed successfully", response });
// });

const getUserDetails = asyncHandler(async (req, res) => {
  const _id = req.user._id;

  const { username, avatar } = await User.findById(_id);

  // find avatar
  if (avatar === "image.jpg") {
    res.status(200).send({
      username,
      avatar,
    });
  } else {
    const imagePath = `public/assets/${avatar}`;
    const image = fs.readFileSync(imagePath);
    const base64Image = image.toString("base64");

    res.status(200).send({
      username,
      avatar: base64Image,
    });
  }
});

module.exports = { getUserDetails };
