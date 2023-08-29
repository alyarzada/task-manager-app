const asyncWrapper = require("../middlewares/async");
const Task = require("../models/taskModel");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).send({ tasks });

  // try {
  //   const tasks = await Task.find({});
  //   return res.status(200).send({ message: "Tasks sent successfully", tasks });
  // } catch (error) {
  //   return res.status(400).send({ message: "Bussiness validation error" });
  // }
});

const createNewTask = async (req, res) => {
  const data = req.body;

  // const newTask = await Task.create(data);
  // return res
  //   .status(201)
  //   .send({ message: "Task created successfully!", data: newTask });

  try {
    const newTask = await Task.create(data);
    return res
      .status(201)
      .send({ message: "Task created successfully", data: newTask });
  } catch (error) {
    console.log(error.message.title);
    return res.status(400).send({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTaskId = await Task.findByIdAndDelete(id);

    if (!deletedTaskId) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(400).send({ message: "Bussiness validation error" });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    return res.status(400).send({ message: "Bussiness validation error" });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
};

// find
// findOne;
// create
// findByIdAndDelete, findOneAndDelete
// findByIdAndUpdate, findOneAndUpdate
