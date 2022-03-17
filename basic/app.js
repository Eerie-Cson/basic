const http = require('http');
const Koa = require('koa');
const app = new Koa();

//Server configuration
const host = 'localhost';
const port = 8080;


//Server response
app.use(async ctx => {
  ctx.body = 'Hello World';
});


// Listen
const httpServer = http.createServer(app.callback()).listen(port);
console.log(`Listening on ${port}....`);