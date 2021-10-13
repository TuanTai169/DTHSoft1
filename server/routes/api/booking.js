const router = require("express").Router()
const Room = require("../../models/Room")
const Booking = require("../../models/Booking")
const verifyToken = require("../../middleware/authorization")
const toolRoom = require("../../tools/roomTool")
const toolService = require("../../tools/serviceTool")

// @route POST api/booking/
// @decs CREATE BOOKING/CHECK-IN
// @access Private
router.post("/:book", verifyToken, async (req, res) => {
  const {
    rooms,
    customer,
    checkInDate,
    checkOutDate,
    services,
    deposit,
    discount,
  } = req.body

  try {
    // Check status room
    const checkStatus = await toolRoom.checkStatusRoom(rooms)
    if (checkStatus === false)
      return res.status(400).json({
        success: false,
        message: "Room has been booked or occupied",
      })

    // //Calculate room's price
    const roomCharge = await toolRoom.calculateRoomCharge(rooms)
    // //Calculate service's price
    const serviceCharge = await toolService.calculateServiceCharge(services)

    //Change status
    let status = req.params.book === "check-in" ? "CHECK IN" : "BOOKING"

    //Price
    const VAT = 10
    const totalPrice = (roomCharge + serviceCharge) * (1 + VAT / 100)

    const newBooking = new Booking({
      rooms,
      customer,
      checkInDate,
      checkOutDate,
      roomCharge: roomCharge,
      services,
      serviceCharge: serviceCharge,
      deposit,
      discount,
      VAT,
      totalPrice,
      status,
      isActive: true,
      createBy: req.userId,
      updateBy: null,
    })
    await newBooking.save()

    //Change STATUS ROOM
    toolRoom.changeStatus(rooms, status)

    res.json({
      success: true,
      message: `Booking successfully`,
      booking: newBooking,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})

// @route GET api/booking/
// @decs READ ALL BOOKING/CHECK-IN
// @access Private
router.get("/", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ isActive: true })
    res.json({
      success: true,
      bookings,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})

// @route GET api/booking/
// @decs READ 1 BOOKING/CHECK-IN
// @access Private
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    res.json({
      success: true,
      booking,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})

// @route PUT api/booking/
// @decs CHANGE ROOM
// @access Private
router.put(
  `/change-room/:bookingID/:roomChooseID/:roomChangeID`,
  verifyToken,
  async (req, res) => {
    const bookingID = req.params.bookingID
    const roomChooseID = req.params.roomChooseID
    const roomChangeID = req.params.roomChangeID
    try {
      const booking = await Booking.findById(bookingID)
      const serviceCharge = booking.serviceCharge
      const newRooms = toolRoom.changeRoom(
        booking.rooms,
        roomChooseID,
        roomChangeID
      )
      //Calculate room's price
      const roomCharge = await toolRoom.calculateRoomCharge(newRooms)
      //Price
      const VAT = 10
      const totalPrice = (roomCharge + serviceCharge) * (1 + VAT / 100)

      const bookingUpdateCondition = { _id: bookingID }

      let updateBooking = {
        rooms: newRooms,
        roomCharge,
        totalPrice,
      }
      updatedBooking = await Booking.findOneAndUpdate(
        bookingUpdateCondition,
        updateBooking,
        {
          new: true,
        }
      )

      //Change STATUS ROOM
      toolRoom.changeStatus(newRooms, "OCCUPIED")
      toolRoom.changeStatus(roomChooseID, "READY")
      res.json({
        success: true,
        message: "Booking updated successfully",
        updatedBooking,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
      })
    }
  }
)
module.exports = router
