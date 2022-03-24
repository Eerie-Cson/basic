const http = require('http');
const Koa = require('koa');
const app = new Koa();

//Server response
app.use(async ctx => {
  ctx.body = {message: 'Hello, world!'};
});
module.exports = app;
