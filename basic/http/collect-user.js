const Koa = require('koa');
const Router = require('koa-router');
const {v4 : uuidv4} = require('uuid');
const argon2 = require('argon2');

const app = new Koa(),
 router =  new Router();


async function hashPassword(password){
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new Error('Error');
  }
}

class User {
  data =  {    
    "users":
      [{
        "id": uuidv4(),
        "name":"the name",
        "email":"thename@gmail.com"
      }]
  };

  getUsersPass(){

    return this.data.users[0].password;
  }


};
const user = new User();

router.get( '/users', async ctx => {
  ctx.body = user.getUsersPass();
});
app.use(router.routes());

module.exports = {app, hashPassword};

