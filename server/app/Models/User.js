"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class User extends Model {
  static boot() {
    super.boot();
    this.addHook("beforeSave", async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  static get hidden() {
    return ["password"];
  }

  tokens() {
    return this.hasMany("App/Models/Token");
  }

  typeUser() {
    return this.belongsTo("App/Models/TypeUser");
  }

  static get table() {
    return "users";
  }

  static get primaryKey() {
    return "userId";
  }
}

module.exports = User;
