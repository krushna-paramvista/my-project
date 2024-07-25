const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.status = 500; // Set HTTP status code for error
      ctx.body = { error: err.message || 'Internal Server Error' }; // Send error message
    }
  },
}));
