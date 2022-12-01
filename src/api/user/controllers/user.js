'use strict';

/**
 * A set of functions called "actions" for `user`
 */

module.exports = {
  async me(ctx, next) {

    const id = ctx.state.user.id;

    return await strapi.query("plugin::users-permissions.user").findOne({

      where: { id },

      populate: ["role"],

    });

  },
};
