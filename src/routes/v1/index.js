const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");

router.post("/signup", UserController.create);
router.delete("/signup/:id", UserController.destroy);

module.exports = router;
