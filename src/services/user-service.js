const UserRepository = require("../repository/user-repository");

const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
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

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "30s" });
      return result;
    } catch (err) {
      console.log("something went wrong in token creation");
      throw err;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (err) {
      console.log("something went wrong in token validation");
      throw err;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (err) {
      console.log("Something went wrong in password comparison");
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
