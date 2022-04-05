import Koa from 'koa';
import Router from "koa-router";
import BodyParser from "koa-bodyparser";
import { Chance } from "chance";
import {Schema, model, Mongoose} from "mongoose";

const app = new Koa(),
      router =  new Router(),
      chance = new Chance(),
      mongoose = new Mongoose();

app.use(BodyParser());

main().catch(err => console.log(err));
async function main(){
  await mongoose.connect('mongodb://localhost:27017/Users');
};

const userSchema =  new Schema( {name: String, password: String}, {versionKey: false} );
const userModel =  model('User',userSchema);

router.get( '/users', async ctx => {
  const data = await userModel.find({});
  ctx.body= {
    data: data
  }
});

router.get( '/users/:id', async ctx => {
  const userId = ctx.params.id;
  const userData = await userModel.findById(userId).exec();

  ctx.body= {
    data: userData
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
  const userId = ctx.params.id;

  const newData = { name: 'sheeesh', password: 'newpassword'};
  const updatedUser = await userModel.findByIdAndUpdate( userId, newData);
  ctx.body = {data:updatedUser};
});

router.delete('/users/:id',async ctx => {
  const userId = ctx.params.id;
  await userModel.deleteOne({_id: userId});
  ctx.body = {message: "data of "+ userId + "deleted successfully"};
})
app.use(router.routes()).use(router.allowedMethods());
export default app;
