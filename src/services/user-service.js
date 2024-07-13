const UserRepository = require("../repository/user-repository");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const passwordsMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordsMatch) {
        console.log("password does not match");
        throw { error: "Incorrect Password" };
      }
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (err) {
      console.log("something went wrong in user service");
      throw err;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "3h" });
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
      const response = bcrypt.compareSync(
        userInputPlainPassword,
        encryptedPassword
      );
      return response;
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

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "Invalid Token" };
      }
      const user = this.userRepository.getById(response.id);
      if (!user) {
        throw { error: "No user with corresponding token exists" };
      }
      return user.id;
    } catch (err) {
      console.log(err);
      console.log("something went wrong at user service");
      throw err;
    }
  }
}

module.exports = UserService;
