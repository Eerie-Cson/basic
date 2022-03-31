const Koa = require('koa');
const Router = require('koa-router');
const {Chance} = require('chance');
const BodyParser = require('koa-bodyparser');
const R = require('ramda');
const argon2 = require('argon2');

const app = new Koa(),
 router =  new Router();
const chance = new Chance();

app.use(BodyParser());

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
const userData = user.data;

router.get( '/users', async ctx => {
  ctx.body = {
    data:userData.map((e)=>{
      return {id:e.id,name:e.name}; 
    })
  };
});

router.get( '/users/:id', async ctx => {
  
  console.log(userData);
  for(var i=0; i<userData.length; i++){
    if(userData[i].id == ctx.params.id){
      found = userData[i];
      break;
    }
  }
  console.log(found);
  ctx.body = {
    data:{name: found.name, id: found.id}
  };
});

router.post('/users',async ctx => {
  
  userData.push(ctx.request.body);
  
  ctx.body = {
    data:userData.map((e)=>{
      return {id:e.id,name:e.name}; 
    })
  };
});

router.patch('/users/:id',async ctx => {  

  for (const obj of userData) {
    if (obj.id == ctx.params.id) {
      obj.name = ctx.request.body.name;
      break;
    }
    
  }
 
  const updated = userData;
  ctx.body = {
    data:updated.map((e)=>{
      return {id:e.id,name:e.name}; 
    })
  }
  
});

app.use(router.routes());

module.exports = {
  app,
  hashPassword
};

