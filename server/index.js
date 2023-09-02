const express = require("express");
const taskRoutes = require("./routers/tasks");
const connectDb = require("./db/connect");
const errorHandler = require("./middlewares/errorHandler");

// env
require("dotenv").config();

// init express
const app = express();

// middlewares
app.use(express.json());

// route middlewares
app.use("/api/tasks", taskRoutes);

// error middleware
app.use(errorHandler);

// connect to db and listen on port 4000
const runServer = async () => {
  try {
    await connectDb(process.env.DB_URL);
    app.listen(process.env.PORT, () =>
      console.log("connected to db and listening on port " + process.env.PORT)
    );
  } catch (error) {
    (error) => console.log(error);
  }
};

runServer();
