"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TypeUserSchema extends Schema {
  up() {
    this.create("type_users", (table) => {
      table.increments("typeUserId");
      table.string("name", 50).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("type_users");
  }
}

module.exports = TypeUserSchema;
