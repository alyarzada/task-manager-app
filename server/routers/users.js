const express = require("express");
const { login, register, changeAvatar } = require("../controllers/user");

// init router
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/changeAvatar/:id").patch(changeAvatar);

module.exports = router;
