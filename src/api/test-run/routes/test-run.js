'use strict';

/**
 * test-run router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-run.test-run');
