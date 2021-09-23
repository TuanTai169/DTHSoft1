const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const PORT = 5000;

//Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

//route
app.get("/", (req, res) => res.send("Hello world!"));

app.listen(PORT, () => console.log(`Server started on post ${5000}`));
