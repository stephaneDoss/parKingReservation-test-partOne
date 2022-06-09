const Reservation = require("../models/reservationModel");

exports.createReservation = (req, res) => {
  console.log(req);

  const reservation = new Reservation({
    userId: req.body.userId,
    parkingId: req.body.parkingId,
    period: req.body.period,
  });
  reservation
    .save()
    .then(() => {
      res.status(201).json({
        message: "Reservation saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneReservation = (req, res, next) => {
  Reservation.findOne({
    _id: req.params.id,
  })
    .then((reservation) => {
      res.status(200).json(reservation);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyReservation = (req, res, next) => {
  const reservation = new Reservation({
    _id: req.params.id,
    userId: req.body.userId,
    parkingId: req.body.parkingId,
    period: req.body.period,
  });
  Reservation.updateOne({ _id: req.params.id }, reservation)
    .then(() => {
      res.status(201).json({
        message: "Reservation updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteReservation = (req, res, next) => {
  Reservation.deleteOne({ _id: req.params.id })
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

exports.getAllReservation = (req, res, next) => {
  Reservation.find()
    .then((reservations) => {
      res.status(200).json(reservations);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
