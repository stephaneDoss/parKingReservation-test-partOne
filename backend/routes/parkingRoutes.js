const express = require("express");
const router = express.Router();

const parkingCtrl = require("../controllers/parkingControllers");

router.get("/", parkingCtrl.getAllParking);
router.post("/", parkingCtrl.createParking);
router.get("/:id", parkingCtrl.getOneParking);
router.put("/:id", parkingCtrl.modifyParking);
router.delete("/:id", parkingCtrl.deleteParking);

module.exports = router;
