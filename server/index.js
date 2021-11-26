require("dotenv").config()
require("./config/database").connectDB()
const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")

//Import Routes
const routes = require("./routes")

//Middleware
app.use(express.json())
app.use(cors())
app.use(
  fileUpload({
    useTempFiles: true,
  })
)
app.use(routes)

module.exports = app
