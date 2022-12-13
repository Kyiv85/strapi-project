'use strict';

/**
 * test-run service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-run.test-run');
