"use strict";

const UserModel = use("App/Models/User");

const Hash = use("Hash");
const { v4: uuidv4 } = use("uuid");

class UserController {
  async showUser({ params }) {
    const user = await User.findOrFail(params.id);
    await user.load("typeUser");

    return user;
  }

  async createUser({ request, response }) {
    const data = request.only(["username", "email", "password", "typeUserId"]);

    const createUser = await UserModel.create(data);

    return createUser;
  }

  async updateUser({ params, request, response }) {
    const user = await UserModel.findOrFail(params.id);

    const data = request.only(["email", "password"]);

    user.merge(data);

    await user.save();

    return user;
  }

  async updateUser({ request, auth, response }) {
    const user = await UserModel.findOrFail(auth.user.userId);

    const data = request.only(["email", "password"]);

    user.merge(data);

    await user.save();

    return user;
  }
} /*
  async updateUser({ request, response, params }) {
    const { email, password } = request.body;
    const user = await UserModel.findOrFail(params.id);

    if (!user) {
      return response.status(404).send({
        error: {
          message: "User not Found.",
          status: 404,
        },
      });
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    await user.save();

    return user;
  }

  async listAllUsers() {
    const listUsers = await UserModel.all();

    return listUsers;
  }
  */
module.exports = UserController;
