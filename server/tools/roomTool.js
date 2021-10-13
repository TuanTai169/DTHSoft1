const Room = require("../models/Room")
const _ = require("lodash")
exports.changeStatus = async (rooms, status) => {
  rooms.forEach(async (room) => {
    const filter = { _id: room }
    const update = { status: status }

    updatedRoom = await Room.findByIdAndUpdate(filter, update, { new: true })
  })
}

exports.calculateRoomCharge = async (rooms) => {
  const listRoom = await getAllInfoRoom(rooms)
  return _.sumBy(listRoom, (item) => item.price)
}

exports.checkStatusRoom = async (rooms) => {
  let check = true
  const listRoom = await getAllInfoRoom(rooms)
  listRoom.forEach((room) => {
    if (room.status === "BOOKING" || room.status === "OCCUPIED") check = false
  })
  return check
}

exports.changeRoom = (rooms, roomChooseID, roomChangeID) => {
  const index = rooms.findIndex((item) => (item = roomChooseID))
  rooms[index] = roomChangeID
  return rooms
}
const getAllInfoRoom = async (rooms) => {
  const promise = rooms.map((room) => {
    return Room.findById(room)
  })
  return await Promise.all(promise)
}
