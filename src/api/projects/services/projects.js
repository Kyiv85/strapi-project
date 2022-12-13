'use strict';

/**
 * projects service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::projects.projects');
