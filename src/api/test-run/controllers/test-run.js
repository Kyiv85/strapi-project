'use strict';

/**
 * test-run controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-run.test-run');
