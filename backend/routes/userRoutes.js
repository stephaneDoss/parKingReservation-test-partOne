const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userControllers");

// router.get("/", userCtrl.getAllUser);
// router.get("/:id", userCtrl.getOneUser);
// router.put("/:id", userCtrl.modifyUser);
// router.delete("/:id", userCtrl.deleteUser);

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
