const Parking = require("../models/parkingModel");

exports.createParking = (req, res) => {
  console.log(req);

  const parking = new Parking({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    numberParkingSpot: req.body.price,
    localisation: req.body.localisation,
    price: req.body.price,
  });
  parking
    .save()
    .then(() => {
      res.status(201).json({
        message: "Parking saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneParking = (req, res, next) => {
  Parking.findOne({
    _id: req.params.id,
  })
    .then((parking) => {
      res.status(200).json(parking);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyParking = (req, res, next) => {
  const parking = new Parking({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    numberParkingSpot: req.body.price,
    localisation: req.body.localisation,
    price: req.body.price,
  });
  Parking.updateOne({ _id: req.params.id }, parking)
    .then(() => {
      res.status(201).json({
        message: "Parking updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteParking = (req, res, next) => {
  Parking.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllParking = (req, res, next) => {
  Parking.find()
    .then((parkings) => {
      res.status(200).json(parkings);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
