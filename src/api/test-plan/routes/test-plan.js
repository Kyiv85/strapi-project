'use strict';

/**
 * test-plan router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-plan.test-plan');
