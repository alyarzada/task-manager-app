const express = require("express");
const { getUserDetails } = require("../controllers/userDetails");
const { requireAuth } = require("../middlewares/requireAuth");

// init router
const router = express.Router();

// check auth
router.use(requireAuth);

router.route("/").get(getUserDetails);

module.exports = router;
