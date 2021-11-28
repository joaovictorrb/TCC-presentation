"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class UserActivity extends Model {
  static get connection() {
    return "mysql";
  }

  static get table() {
    return "user_activity";
  }

  static get primaryKey() {
    return "userActivityId";
  }

  //funcao query
}

module.exports = UserActivity;
