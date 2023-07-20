import mongoose from "mongoose";

// const connectionString =
//   "";

// url  is the connection string that we set up in .env file

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      ////* this object is use to avoid deprication warnings */
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db...");
  } catch (err) {
    console.log(err);
  }
};

// module.exports = connectDB;
export default connectDB;
