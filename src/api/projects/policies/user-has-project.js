'use strict';

module.exports = async (policyContext, config, { strapi }) => {
  //TODO Add try block
  try {
    return await strapi.service('api::projects.projects').userHasProject(policyContext.state.user.id);
  } catch (e){
    console.log('Policy failed '+e);
    return false;
  }
};
  
  
  