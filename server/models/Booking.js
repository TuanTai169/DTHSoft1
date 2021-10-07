const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookingItemSchema = new Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "rooms",
    },
    checkInDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    checkOutDate: {
      type: Date,
    },
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: "services",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    status: {
      type: String,
      enum: ["NOT PROCESSED", "BOOK", "CHECK IN", "CHECK OUT"],
      default: "NOT PROCESSED",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("bookingItems", BookingItemSchema)

const BookingSchema = new Schema(
  {
    rooms: [BookingItemSchema],
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers",
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

module.exports = mongoose.model("bookings", BookingSchema)
