const Koa = require('koa');
const Router = require('koa-router');
const argon2 = require('argon2');

const app = new Koa(),
 router =  new Router();

 async function hashPassword(str){
  try {
    const hash = await argon2.hash(str);
  } 
  catch (err) {
      throw new Error('Error');
  };
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
  hashPassword,
  argon2
};

