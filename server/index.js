const express = require("express");
require("dotenv").config();
const taskRoutes = require("./routers/tasks");
const mongoose = require("mongoose");
const connectDb = require("./db/connect");
const cors = require('cors')

// init express
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

//cors
app.use(cors());
const corsOptions = {
  origin: 'http://127.0.0.1:5173',
};
app.use(cors(corsOptions));

// app.use(notFound);
// app.use(errorHandlerMiddleware);

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
