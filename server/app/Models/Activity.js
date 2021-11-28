"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Activity extends Model {
  static get connection() {
    return "mysql";
  }

  static get table() {
    return "activities";
  }

  static get primaryKey() {
    return "activityId";
  }
}

module.exports = Activity;
