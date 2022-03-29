const Koa = require('koa');
const Router = require('koa-router');
const argon2 = require('argon2');

const app = new Koa(),
 router =  new Router();

 async function hashPassword(password){
   const hash = await argon2.hash(password);
   return toString(hash);
 }

class User {
  data =  {    
    "users":
      [{
        "id":"1",
        "name":"the name",
        "email":"thename@gmail.com"
      }]
  };

};

const user = new User(); 
router.get( '/users', async ctx => {
  ctx.body = user;
});
app.use(router.routes());

module.exports = {
  app,
  hashPassword
};

