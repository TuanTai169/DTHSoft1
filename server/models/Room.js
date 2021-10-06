const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RoomSchema = new Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
    },
    floor: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      enum: ["SINGLE", "DOUBLE", "DELUXE"],
      default: "DOUBLE",
    },
    status: {
      type: String,
      enum: ["READY", "OCCUPIED", "CLEANING"],
      default: "READY",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("rooms", RoomSchema)
