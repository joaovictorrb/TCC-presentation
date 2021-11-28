"use strict";

const Database = use("Database");

class UserSeeder {
  async run() {
    await Database.table("users").insert({
      username: "joaorb",
      email: "teste@gmail.com",
      password: "$2a$10$9xPLAinSNRPCu3he/qFiWO/QqANsIt5nlkAaUvujZKcbjqd9NDMEa",
      typeUserId: 1,
    });
    await Database.table("users").insert({
      username: "pedroTh",
      email: "teste2@gmail.com",
      password: "$2a$10$9xPLAinSNRPCu3he/qFiWO/QqANsIt5nlkAaUvujZKcbjqd9NDMEa",
      typeUserId: 2,
    });
    await Database.table("users").insert({
      username: "ThiagoA",
      email: "teste3@gmail.com",
      password: "$2a$10$9xPLAinSNRPCu3he/qFiWO/QqANsIt5nlkAaUvujZKcbjqd9NDMEa",
      typeUserId: 2,
    });
    await Database.table("users").insert({
      username: "Tutor",
      email: "tutor@gmail.com",
      password: "$2a$10$b9V.S/eUuDXaojKXgvWNxOAZmCWkzGgiZUlaPOXRKztQUvuSHibey",
      typeUserId: 1,
    });
    await Database.table("users").insert({
      username: "Student",
      email: "student@gmail.com",
      password: "$2a$10$pUxE8dq9r.usucVlsLwaz.6MHOKMJ421b5EswBOhOZcY1Mj9kC9Ti",
      typeUserId: 2,
    });
  }
}

module.exports = UserSeeder;
