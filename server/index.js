const express = require("express");
const taskRoutes = require("./routers/tasks");
const userRoutes = require("./routers/users");
const connectDb = require("./db/connect");
const errorHandler = require("./middlewares/errorHandler");

// env
require("dotenv").config();
const cors = require("cors");
const { requireAuth } = require("./middlewares/requireAuth");

// init express
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// route middlewares
app.use("/api/auth", userRoutes);
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
