const router = require("express").Router()
const Room = require("../../models/Room")
const Booking = require("../../models/Booking")
const verifyToken = require("../../middleware/authorization")

// @route POST api/booking/
// @decs BOOKING ROOM/CREATE
// @access Private
router.post("/book", verifyToken, async (req, res) => {
  const {
    rooms,
    customer,
    checkInDate,
    checkOutDate,
    services,
    deposit,
    status,
  } = req.body
  try {
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})
module.exports = router
