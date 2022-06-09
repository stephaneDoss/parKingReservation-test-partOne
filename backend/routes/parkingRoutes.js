const express = require("express");
const router = express.Router();
const parkingCtrl = require("../controllers/parkingControllers");
const auth = require("../middleware/auth");

router.get("/", auth, parkingCtrl.getAllParking);
router.post("/", auth, parkingCtrl.createParking);
router.get("/:id", auth, parkingCtrl.getOneParking);
router.put("/:id", auth, parkingCtrl.modifyParking);
router.delete("/:id", auth, parkingCtrl.deleteParking);

module.exports = router;
