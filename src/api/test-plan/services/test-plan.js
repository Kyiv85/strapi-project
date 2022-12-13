'use strict';

/**
 * test-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-plan.test-plan');
