"use strict";

const UserActivityModel = use("App/Models/UserActivity");
const ActivityModel = use("App/Models/Activity");
class ActivityController {
  async store({ request, response }) {
    const { title, description, type, level } = request.body;
    // !! Add validator
    const createActivity = await ActivityModel.create({
      title,
      description,
      type,
      level,
    });

    return createActivity;
  }

  async displayAllActivities() {
    let activities = await ActivityModel.all();

    return activities;
  }

  async saveCompletedActivity({ params, request, response, auth }) {
    const { activityId } = await ActivityModel.findOrFail(params.id);
    const { code } = request.only(["code"]);

    const storeActivityDeveloped = await UserActivityModel.query()
      .table("user_activity")
      .insert({
        userId: auth.user.userId,
        activityId,
        code,
      });

    return storeActivityDeveloped;
  }

  async updateCompletedActivity({ params, request, response }) {
    const data = request.only(["reviewDescription"]);
    data.wasRevised = true;

    const activity = await UserActivityModel.findOrFail(params.id);

    if (!activity) {
      return response.status(404).send({
        error: {
          message: "Activity not Found.",
          status: 404,
        },
      });
    }

    activity.merge(data);
    await activity.save();
    return activity;
  }

  async getActivityData({ params, response }) {
    const activity = await ActivityModel.findOrFail(params.id);

    if (!activity) {
      return response.status(404).send({
        error: {
          message: "No data was fetched.",
          status: 404,
        },
      });
    }
    return activity;
  }

  async listCompletedActivities({ auth }) {
    const { userId, typeUserId } = auth.user;

    let where = "";

    if (userId && typeUserId !== 1) {
      where = `u.userId = ${userId}`;
    }

    let completedActivities = (
      await ActivityModel.query()
        .select(
          "u.username",
          "u.userId",
          "u.typeUserId",
          "a.title",
          "ua.userActivityId",
          "ua.activityId",
          "ua.code",
          "ua.reviewDescription",
          "ua.wasRevised"
        )
        .table("user_activity as ua")
        .join("users as u", "ua.userId", "u.userId")
        .join("activities as a", "a.activityId", "ua.activityId")
        .whereRaw(where)
        .fetch()
    ).toJSON();

    return completedActivities;
  }

  async getCompletedActivityData({ params, response }) {
    const userActivityId = params.id;

    const data = (
      await ActivityModel.query()
        .select(
          "u.username",
          "a.title",
          "a.type",
          "a.description",
          "ua.activityId",
          "ua.code",
          "ua.reviewDescription",
          "ua.wasRevised"
        )
        .table("user_activity as ua")
        .join("users as u", "ua.userId", "u.userId")
        .join("activities as a", "a.activityId", "ua.activityId")
        .where("ua.userActivityId", userActivityId)
        .fetch()
    ).toJSON();

    if (!data) {
      return response.status(404).send({
        error: {
          message: "No data was fetched.",
          status: 404,
        },
      });
    }

    return data;
  }

  async updateActivity({ params, request, response }) {
    const activity = await ActivityModel.findOrFail(params.id);

    const data = request.only(["description", "title"]);

    activity.merge(data);
    await activity.save();

    return activity;
  }
}

module.exports = ActivityController;
