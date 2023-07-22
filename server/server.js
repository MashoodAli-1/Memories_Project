import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/db.js";
import postRoute from "./routes/post.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/post", postRoute);

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
