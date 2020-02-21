import { createController } from 'awilix-koa';

const userController = userService => ({
  randomUser: async ctx => {
    const {
      request: {
        body: {}
      }
    } = ctx;

    const user = await userService.randomUser(ctx);

    if (!user) {
      ctx.throw(404, 'Data not found');
    }

    ctx.body = user;
  }
});

export default createController(userController)
  .prefix('/api/random-user')
  .get('', 'randomUser');
