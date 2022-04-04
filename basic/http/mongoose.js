const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const {Chance} = require('chance');
const mongoose = require('mongoose');

const app = new Koa(),
      router =  new Router(),
      chance = new Chance();

app.use(BodyParser());

main().catch(err => console.log(err));
async function main(){
  await mongoose.connect('mongodb://localhost:27017/Users');
};

const userSchema =  mongoose.Schema( {name: String, password: String}, {versionKey: false} );
const userModel =  mongoose.model('User',userSchema);

router.get( '/users', async ctx => {
  const data = await userModel.find({});
  ctx.body= {
    data: data
  }
});

router.get( '/users/:id', async ctx => {
  id = ctx.params.id;
  const helloData = await userModel.findById(id).exec();

  ctx.body= {
    data: helloData
  }
});

router.post('/users',async ctx =>{ 
  const newUser = await userModel.create({
          name: chance.name(),
      password: chance.string()
  });
  ctx.body = {data: newUser}
});

router.patch('/users/:id', async ctx =>{
  const id = ctx.params.id;

  newName = { name: 'sheeesh', password: 'newpassword'};
  const updatedUser = await userModel.findByIdAndUpdate(id, newName);
  ctx.body = {data:updatedUser};
});

router.delete('/users/:id',async ctx => {
  const id = ctx.params.id;
  await userModel.deleteOne({_id: id});
  ctx.body = {message: "data of "+ id + "deleted successfully"};
})
app.use(router.routes()).use(router.allowedMethods());
module.exports = app;
