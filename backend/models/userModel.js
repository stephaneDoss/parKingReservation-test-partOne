const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: false, default: false },
});
