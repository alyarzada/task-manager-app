const express = require("express");
const {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
  getUserTasks,
} = require("../controllers/tasks");
const { requireAuth } = require("../middlewares/requireAuth");

// init router
const router = express.Router();

// check auth
router.use(requireAuth);

router.route("/all").get(getAllTasks);
router.route("/").get(getUserTasks).post(createNewTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;

// tasks
// 1. protected route
// 2. add access token to header (in axios config)
// 3. add avatar to header component (username, email)
// 4. home page = alltasks, my tasks = userTasks

// accessToken ve refreshToken (expire)
