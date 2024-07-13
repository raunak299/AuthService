const { ClientErrors } = require("../utils/error-codes");

const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "Email or password missing in request",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
};
