const { User } = require("../models");
const user = require("../models/user");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      console.log("something went wrong at user repository");
      throw err;
    }
  }

  async destroy(userId) {
    console.log("repo", userId);
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
}

module.exports = UserRepository;
