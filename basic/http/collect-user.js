const Koa = require('koa');
const Router = require('koa-router');
const {Chance} = require('chance');
const R = require('ramda');
const argon2 = require('argon2');

const app = new Koa(),
 router =  new Router();
const chance = new Chance();

 async function hashPassword(str){
  const hash = await argon2.hash(str);
  return hash;
}

class User {
  data =  R.times(()=>{
    return {
      id:chance.natural(),
      name:chance.name(),
      password: chance.string()
    }
  })(3);

};

const user = new User();
router.get( '/users', async ctx => {
  ctx.body = {data:user.data.map((e)=>{
      return {id:e.id,name:e.name}; 
    })
  };
});
router.post('/users',async ctx => {
  ctx.body = 
    {data:user.data.map(
        (e)=> {
          return{id:e.id, name:e.name, password:e.password}
        })
    }
});
app.use(router.routes());

module.exports = {
  app,
  hashPassword
};

