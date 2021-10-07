require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

//Import Routes
const routes = require("./routes")

//Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("MongoDb connected")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
connectDB()

//Middleware
app.use(express.json())
app.use(cors())
app.use(routes)

//Listen
const PORT = 5000
app.listen(PORT, () => console.log(`Server started on post ${PORT}`))
