const express = require("express");
const router = express.Router();

const reservationCtrl = require("../controllers/reservationControllers");

router.get("/", reservationCtrl.getAllReservation);
router.post("/", reservationCtrl.createReservation);
router.get("/:id", reservationCtrl.getOneReservation);
router.put("/:id", reservationCtrl.modifyReservation);
router.delete("/:id", reservationCtrl.deleteReservation);

module.exports = router;
