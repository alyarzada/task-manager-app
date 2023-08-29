const express = require("express");
const {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

// init router
const router = express.Router();

// routers
// router.get("/", getAllTasks);
// router.post("/", createNewTask);
// router.delete("/:id", deleteTask);
// router.patch("/:id", updateTask);

// alternative syntax
router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

module.exports = router;
