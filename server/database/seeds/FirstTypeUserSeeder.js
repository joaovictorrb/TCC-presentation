"use strict";

const Database = use("Database");

class TypeUserSeeder {
  async run() {
    await Database.table("type_users").insert({
      name: "tutor",
    });
    await Database.table("type_users").insert({
      name: "student",
    });
  }
}

module.exports = TypeUserSeeder;
