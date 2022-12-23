'use strict';

/**
 * projects controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::projects.projects', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      //console.log(ctx.state.user);
      const idUser = ctx.state.user.id;
      const { query } = ctx;
  
      // Calling the default core action
      return await strapi.service('api::projects.projects').getProjectByUser(idUser, query);
  
      //return { data, meta };
    },
  
    // Method 3: Replacing a core action
    /*async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
  
      const entity = await strapi.service('api::restaurant.restaurant').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },*/
}));
   