const mongoose = require("mongoose");

const parkingSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  numberParkingSpot: { type: String, required: true },
  localisation: { type: String, required: false },
  price: { type: String, required: true },
});

module.exports = mongoose.model("Parking", parkingSchema);
