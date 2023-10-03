const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "Max length cant be more than 20"],
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["todo", "progress", "completed"],
    default: "todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);
