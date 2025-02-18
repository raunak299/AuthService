const { User, Role } = require("../models");
const user = require("../models/user");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return { user: user.id, email: user.email };
    } catch (err) {
      console.log("something went wrong at user repository");
      throw err;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (err) {
      console.log("something went wrong at user repository");
      throw err;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (err) {
      console.log("something went wrong at user repository");
      throw err;
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (err) {
      console.log("Something went wrong in user repository");
      throw err;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (err) {
      console.log("Something went wrong in user repository");
      throw err;
    }
  }
}

module.exports = UserRepository;
