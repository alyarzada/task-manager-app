const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).send({ message: "Tasks sent successfully", tasks });
  } catch (error) {
    return res.status;
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
};

// find
// create
// findByIdAndDelete
// findByIdAndUpdate
