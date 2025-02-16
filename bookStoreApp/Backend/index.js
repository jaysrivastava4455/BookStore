import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json()); // to parse data

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error: ", error);
  }
};
connect();

// defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

//to listen fo the port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
