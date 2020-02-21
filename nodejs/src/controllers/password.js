import { createController } from 'awilix-koa';

const passwordController = passwordService => ({
  randomPassword: async ctx => {
    const {
      request: {
        body: {}
      }
    } = ctx;

    const password = await passwordService.randomPassword(ctx);

    if (!password) {
      ctx.throw(404, 'Data not found');
    }

    ctx.body = password;
  }
});

export default createController(passwordController)
  .prefix('/api/random-password')
  .get('', 'randomPassword');
