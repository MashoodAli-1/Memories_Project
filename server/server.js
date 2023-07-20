import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// const CONNECTION_URL =
//   "mongodb+srv://mashood:boom@node-projects.lvpwy1s.mongodb.net/Memory-Project?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 4000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`server running on Port: ${PORT}`);
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

// mongoose.set("useFindAndModify", false);

// database connection
// const connectDB = require("./db/connect");
import connectDB from "./db/db.js";
// environement variables

import dotenv from "dotenv";
dotenv.config();

// connection string
const connectionString = process.env.MONGO_URI;

const port = process.env.PORT || 4000;

// we will spin up/start our server only if the database is connected
const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(port, () => {
      console.log(`server listening on port http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
