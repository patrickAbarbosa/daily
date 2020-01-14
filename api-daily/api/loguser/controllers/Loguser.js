'use strict';

/**
 * Loguser.js controller
 *
 * @description: A set of functions called "actions" for managing `Loguser`.
 */

module.exports = {

  /**
   * Retrieve loguser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.loguser.search(ctx.query);
    } else {
      return strapi.services.loguser.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a loguser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.loguser.fetch(ctx.params);
  },

  /**
   * Count loguser records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.loguser.count(ctx.query, populate);
  },

  /**
   * Create a/an loguser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.loguser.add(ctx.request.body);
  },

  /**
   * Update a/an loguser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.loguser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an loguser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.loguser.remove(ctx.params);
  }
};
