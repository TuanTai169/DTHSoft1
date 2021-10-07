const router = require("express").Router()
const keys = require("../config/key")
const { apiURL } = keys.app
const api = `/${apiURL}`

// IMPORT ROUTE
const roomRouter = require("./api/room")
const authRouter = require("./api/auth")
const userRouter = require("./api/user")
const customerRouter = require("./api/customer")

//API ROUTES
router.use(`${api}/auth`, authRouter)
router.use(`${api}/user`, userRouter)
router.use(`${api}/customer`, customerRouter)
router.use(`${api}/room`, roomRouter)
router.use(api, (req, res) =>
  res.status(404).json({
    success: false,
    message: "No API route found",
  })
)

module.exports = router
