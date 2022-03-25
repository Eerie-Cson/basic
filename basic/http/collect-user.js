const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa(),
 router =  new Router();

class User {
  data =  {    
    "users":
      [{
        "id":"1",
        "name":"the name",
        "email":"thename@gmail.com",
        "password":"random string"
      }]
  };

};

const user = new User(); 
router.get( '/users', async ctx => {
  ctx.body = user;
});
app.use(router.routes());

module.exports = app;

