const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userControllers");

router.get("/", userCtrl.getAllUser);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getOneUser);
router.put("/:id", userCtrl.modifyUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
