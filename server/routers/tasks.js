const express = require("express");
const {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// init router
const router = express.Router();

// routers
// router.get("/", getAllTasks);
// router.post("/", createNewTask);

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
