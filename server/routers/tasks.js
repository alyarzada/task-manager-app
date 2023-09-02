const express = require("express");
const {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// init router
const router = express.Router();

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
