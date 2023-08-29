const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// interface ITask {
//   title: string;
//   description: string;
//   priority: "low" | "medium" | "medium";
//   status: "todo" | "progress" | "completed";
//   createdAt: Date;
//   updatedAt: Date;
// }

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
    minlength: [2, "name can not be less than 2 characters"],
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
