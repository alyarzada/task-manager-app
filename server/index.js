const express = require("express");
require("dotenv").config();
const taskRoutes = require("./routers/tasks");
const mongoose = require("mongoose");

// init express
const app = express();

// global middleware
app.use(express.json());

// middleware
app.use("/api/tasks", taskRoutes);

// connect to db and listen on port 4000
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("connected to db and listening on port " + process.env.PORT)
    );
  })
  .catch((error) => console.log(error));
