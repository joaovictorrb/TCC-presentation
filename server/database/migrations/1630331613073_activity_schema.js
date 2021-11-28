"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ActivitySchema extends Schema {
  up() {
    this.create("activities", (table) => {
      table.increments("activityId");
      table.string("title", 200).notNullable().unique();
      table.string("description", 5000).notNullable();
      table.string("type", 10).notNullable();
      table.string("level", 10).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("activities");
  }
}

module.exports = ActivitySchema;
