const express = require("express");
const router = express.Router();
const reservationCtrl = require("../controllers/reservationControllers");
const auth = require("../middleware/auth");

router.get("/", auth, reservationCtrl.getAllReservation);
router.post("/", auth, reservationCtrl.createReservation);
router.get("/:id", auth, reservationCtrl.getOneReservation);
router.put("/:id", auth, reservationCtrl.modifyReservation);
router.delete("/:id", auth, reservationCtrl.deleteReservation);

module.exports = router;
