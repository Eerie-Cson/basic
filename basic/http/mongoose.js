const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const argon2 = require('argon2');
const R = require('ramda');
const mongoose = require('mongoose');

const app = new Koa(),
      router =  new Router();

app.use(BodyParser());

main().catch(err => console.log(err));
async function main(){
  await mongoose.connect('mongodb://localhost:27017/Users');
};

const userSchema =  mongoose.Schema( {name: String, password: String} );
const userModel =  mongoose.model('User',userSchema);

router.get( '/users', async ctx => {

  const userData = await userModel.find({}); 
  ctx.body= {
    data: userData
  }
});

app.use(router.routes()).use(router.allowedMethods());
module.exports = app;
