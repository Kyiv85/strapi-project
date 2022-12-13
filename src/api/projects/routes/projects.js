'use strict';

/**
 * projects router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::projects.projects');
