const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Parking = require("./models/parkingModel");

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
app.post("/api/parking", (req, res, next) => {
  console.log(req.body);
  const parking = new Parking({
    ...req.body,
  });
  parking
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});
app.use("/api/parking", (req, res, next) => {
  Parking.find()
    .then((parkings) => res.status(200).json(parkings))
    .catch((error) => res.status(400).json({ error }));
});
app.get("/api/parking/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

module.exports = app;
