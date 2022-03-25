const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa(),
 router =  new Router();

var collect = {"data": 
{    
"users":
  [{
    "id":"1",
    "name":"the name",
    "email":"thename@gmail.com",
    "password":"random string"
  }]
}
};

router.get( '/users', async ctx => {
  ctx.body = collect
});
app.use(router.routes());

module.exports = app;







 /*
const schema  = ({
  id: {
    type:String,
    unique: true
  },
  name:String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});
*/
