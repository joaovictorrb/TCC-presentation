"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserActivitySchema extends Schema {
  up() {
    this.create("user_activity", (table) => {
      table.increments("userActivityId");
      table
        .integer("userId")
        .unsigned()
        .references("userId")
        .inTable("users")
        .notNullable();
      table
        .integer("activityId")
        .unsigned()
        .references("activityId")
        .inTable("activities")
        .notNullable();
      table.string("code", 5000);
      table.string("reviewDescription", 500);
      table.boolean("wasRevised");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_activity");
  }
}

module.exports = UserActivitySchema;
