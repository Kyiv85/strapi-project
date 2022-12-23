'use strict';

/**
 * projects controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::projects.projects', ({ strapi }) => ({
    async find(ctx) {
      const rawData =  await strapi.service('api::projects.projects').getProjectByUser(ctx.state.user.id, ctx);
      const data = []
      rawData.forEach(item => {
        data.push({
            "id": item.project.id,
            "attributes": {
                "name": item.project.name,
                "code": item.project.code,
                "description": item.project.description,
                "avatarColor": item.project.avatarColor,
                "createdAt": item.project.createdAt,
                "updatedAt": item.project.updatedAt,
                "publishedAt": item.project.publishedAt,
            }
        });
      })
      const meta = {}
  
      return { data, meta };
      /*const { data, meta } = await super.find(ctx);
      return { data, meta };*/
    },
}));
   