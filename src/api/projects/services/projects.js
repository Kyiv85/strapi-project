'use strict';

/**
 * projects service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::projects.projects', ({ strapi }) =>  ({
    async getUserPermissionById(id) {
      return strapi.db.query('plugin::users-permissions.user').findOne({
        where: { id: id }
      });
    },

    async findUserByProject(id) {
        return strapi.db.query('api::user-project.user-project').findOne({
          where: { user: id },
          populate: true,
        });
      },

    async userHasProject(id){
      const user = await this.getUserPermissionById(id);
      const userProjects = await this.findUserByProject(user.id);
      if(userProjects !== null){
        return true;
      }
      return false;
    },

    async getProjectByUser(id){
      console.log('id '+id);
      //let esto = await strapi.db.connection.raw('SELECT * FROM user_projects_user_links')
      /*let esto = await strapi.db.query('api::user-project.user-project').findMany({
        populate: {         
          user: {
            where: {
              id: id,
            },
          },
        },
      });*/
      let esto = await strapi.query("plugin::users-permissions.permission").findOne({
        where: { id },
        populate: true,
      });
      console.log(esto);return false;
      /*strapi.db.query('api::user-project.user-project').find({
        where: { user: id },
        populate: true,
      });*/
    }
  }));