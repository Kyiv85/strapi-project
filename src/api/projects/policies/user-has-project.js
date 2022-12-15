'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  //TODO Add try block
  try {
    const user = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { id: policyContext.state.user.id }
    });
    const userProjects = await strapi.db.query('api::user-project.user-project').findOne({
      where: { user: user.id },
      populate: true,
    });
    console.log(userProjects)
    if(userProjects !== null){
      return true;
    }
  } catch (e){
    console.log('Policy failed '+e);
    return false;
  }
  return false;
};
  
  
  