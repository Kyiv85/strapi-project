'use strict';

/**
 * test-case-run service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-case-run.test-case-run');
