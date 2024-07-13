const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = this.userRepository.create(data);
      return user;
    } catch (err) {
      console.log("something went wrong in user service");
      throw err;
    }
  }

  async destroy(data) {
    try {
      const response = this.userRepository.destroy(data);
      return response;
    } catch (err) {
      console.log("something went wrong in user service");
      throw err;
    }
  }

  async getById(data) {
    try {
      const user = await this.userRepository.getById(data);
      return user;
    } catch (err) {
      console.log("something went wrong at user service");
      throw err;
    }
  }
}

module.exports = UserService;
