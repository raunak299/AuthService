const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { AuthRequestValidator } = require("../../middlewares");

router.post(
  "/signup",
  AuthRequestValidator.validateUserAuth,
  UserController.create
);
router.delete("/signup/:id", UserController.destroy);
router.get("/user/:id", UserController.getById);
router.post(
  "/signin",
  AuthRequestValidator.validateUserAuth,
  UserController.signIn
);

router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;
