const Task = require("../models/taskModel");
const asyncHandler = require("../utils/asyncHandler");

const getAllTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ message: "Tasks sent successfully", tasks });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

const createNewTask = async (req, res) => {
  const data = req.body;

  try {
    const task = await Task.create(data);
    return res.status(200).send({ task });
  } catch (error) {
    return res.status(400).send({ message: "Bussiness validation error" });
  }
};

const updateTask = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).send({ task });
  } catch (error) {
    return res.status(400).send({ message: "Bussiness validation error" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    return res.status(200).send({ id: task._id });
  } catch (error) {
    return res.status(400).send({ message: "Bussiness validation error" });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
};
