const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const parkingRoutes = require("./routes/parkingRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const app = express();
connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/parking", parkingRoutes);
app.use("/reservation", reservationRoutes);
app.use("/auth", userRoutes);
module.exports = app;
