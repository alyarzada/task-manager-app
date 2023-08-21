const express = require("express");
const { getAllTasks } = require("../controllers/tasks");

// init router
const router = express.Router();

// routers
router.get("/", getAllTasks);

module.exports = router;
