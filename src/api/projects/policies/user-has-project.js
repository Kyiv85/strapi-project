'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  //console.log(strapi.query('user', 'users-permissions').findOne({ id }, ['roles_frontend']); )
    /*if (policyContext.state.user.role.name === 'Administrator') {
      // Go to next policy or will reach the controller's action.
      return true;
    }*/
    
    const email = policyContext.request.query.email;
    //TODO Add try block
    const user = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { email: email }
    });
    const userProjects = await strapi.db.query('api::user-project.user-project').findMany();
    console.log(userProjects)
    
    return false;
  };
  
  
  