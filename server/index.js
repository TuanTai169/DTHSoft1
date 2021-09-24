const express = require("express")
const app = express()
const mongoose = require("mongoose")

//Import Route
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")

require("dotenv").config()
const PORT = 5000

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

//Routes Middleware
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => console.log(`Server started on post ${5000}`))
