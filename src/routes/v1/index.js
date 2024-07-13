const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");

router.post("/signup", UserController.create);
router.delete("/signup/:id", UserController.destroy);
router.get("/user/:id", UserController.getById);

module.exports = router;
