const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ReceiptSchema = new Schema(
  {
    booking: {
      type: Schema.Types.ObjectId,
      ref: "bookings",
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers",
    },
    roomCharge: {
      type: Number,
      default: 0,
    },
    paidOut: {
      type: Number,
      default: 0,
    },
    createBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    updateBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
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

module.exports = mongoose.model("receipts", ReceiptSchema)
