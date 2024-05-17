'use strict';

/**
 * booking-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking-order.booking-order');
