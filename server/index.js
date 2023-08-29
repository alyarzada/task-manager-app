const express = require("express");
require("dotenv").config();
const taskRoutes = require("./routers/tasks");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");

// init express
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

// app.use(notFound);
// app.use(errorHandlerMiddleware);

// connect to db and listen on port 4000
const runServer = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(process.env.PORT, () =>
      console.log("connected to db and listening on port " + process.env.PORT)
    );
  } catch (err) {
    console.log(err);
  }
};

runServer();
