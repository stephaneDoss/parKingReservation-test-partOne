const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  userId: { type: String, required: true },
  parkingId: { type: String, required: true },
  period: { type: String, required: false },
});

module.exports = mongoose.model("Reservation", reservationSchema);
