"use strict";

class PermissionValidation {
  async handle({ auth, response }, next, properties) {
    if (!properties.includes(String(auth.user.typeUserId))) {
      response.forbidden({ message: "Access Forbidden" });
    }
    await next();
  }
}

module.exports = PermissionValidation;
