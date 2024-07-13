const UserService = require("../services/user-service");
const { SuccessCodes } = require("../utils/error-codes");
const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(SuccessCodes.CREATED).json({
      message: "User created successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy(req.params.id);
    return res.status(SuccessCodes.CREATED).json({
      message: "User deleted successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "not able to delete user",
      data: {},
      success: false,
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
};
