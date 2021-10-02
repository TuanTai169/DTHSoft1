const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

//Import Route
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")

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

//Routes Middleware
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

//Listen
const PORT = 5000
app.listen(PORT, () => console.log(`Server started on post ${PORT}`))
