const { createCustomError } = require("../errors/customError");
const asyncHandler = require("../middlewares/asyncHandler");
const Task = require("../models/taskModel");

// getAllTasks
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).send({ message: "Tasks sent successfully", tasks });
});

// createNewTask
const createNewTask = asyncHandler(async (req, res) => {
  const data = req.body;

  const task = await Task.create(data);
  return res.status(200).send({ task });
});

// updateTask
const updateTask = asyncHandler(async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, data, {
    new: true,
  });
  return res.status(200).send({ task });
});

// deleteTask
const deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndDelete({ _id: id });
  // if (task) {
  //   return next(createCustomError(`No task with id: ${id}`, 404));
  // }
  return res.status(200).send({ id: task._id });
});

module.exports = {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
};

// function
// variable
// state, reducer, ref
// comonent props
// types

// autocomplete
// bug
