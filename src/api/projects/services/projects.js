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
      //let rawQuery = await strapi.db.connection.raw('SELECT * FROM user_projects_user_links')
      return await strapi.query("api::user-project.user-project").findMany({
        where: {
            user: id,
        },
        populate: { 
            project: true,
        },
      });
    },

    async getProjectByUserAndId(idUser,idProject){
      return await strapi.query("api::user-project.user-project").findOne({
        where: {
          user: idUser,
          project: idProject
        },
        populate: { 
          project: true,
        },
      });
    }
  }));