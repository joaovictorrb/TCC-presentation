"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Auth
Route.post("/sessions", "AuthController.verifySession");
// Fetch user for login
Route.post("/login", "AuthController.verifyUser");

// Regiter new user
Route.post("/login/register", "UserController.createUser");

// Update user data (only email)
Route.put("/update_profile", "UserController.updateUser").middleware(
  "auth:jwt"
);

// show all displayed activities
Route.get("/exercises", "ActivityController.displayAllActivities").middleware(
  "auth:jwt"
);
// get data from specific activity
Route.get("/exercises/:id", "ActivityController.getActivityData").middleware(
  "auth:jwt"
);

// create new activity
Route.post("/exercises/new", "ActivityController.store").middleware([
  "auth:jwt",
  "accessPermission:1",
]);

// store completed activity
Route.post(
  "/exercises/:id",
  "ActivityController.saveCompletedActivity"
).middleware("auth:jwt");

// update title and description of activity
Route.put("/exercises/:id", "Activitycontroller.updateActivity").middleware([
  "auth:jwt",
  "accessPermission:1",
]);

// update completed activity with a review
Route.put(
  "review/:id",
  "ActivityController.updateCompletedActivity"
).middleware(["auth:jwt", "accessPermission:1"]);

//  list only completed activities
Route.get("/review", "ActivityController.listCompletedActivities").middleware(
  "auth:jwt"
);
//  list completed activities, filtering by user loogedIn
Route.get(
  "/review/user/:userId",
  "ActivityController.listCompletedActivities"
).middleware("auth:jwt");
//  get specific completed activities data
Route.get(
  "/review/:id",
  "ActivityController.getCompletedActivityData"
).middleware("auth:jwt");
