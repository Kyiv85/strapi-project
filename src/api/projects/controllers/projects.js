'use strict';

/**
 * projects controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::projects.projects');
