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
      data: response,
      message: "User created successfully",
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy(req.params.id);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      message: "User deleted successfully",
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      message: "not able to delete user",
      success: false,
      err: err,
    });
  }
};

const getById = async (req, res) => {
  try {
    const response = await userService.getById(req.params.id);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      message: "User fetched successfully",
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      message: "not able to fetch user",
      success: false,
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  getById,
};
