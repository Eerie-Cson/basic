const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa(),
 router =  new Router();

router.get( '/api', async ctx => {
  ctx.body = {message: 'Welcome to the API'};
});

app.use(router.routes());
module.exports = app;
