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
    return res.status(SuccessCodes.OK).json({
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
    return res.status(SuccessCodes.OK).json({
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

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      message: "User signed in successfully",
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: err,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "User signed in successfully",
      success: true,
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: err,
    });
  }
};

const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "Successfully fetch wether user is admin or not",
      success: true,
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  getById,
  signIn,
  isAuthenticated,
  isAdmin,
};
