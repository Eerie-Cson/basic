import { ApolloServer,gql } from 'apollo-server-koa';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import Koa from 'koa';
import http from 'http';
import Mongoose from 'mongoose';

const app = new Koa();
Mongoose.connect('mongodb://localhost:27017/Users');

const userModel =  Mongoose.model('User',new Mongoose.Schema( {name: String, password: String}, {versionKey: false} ));
  const typeDefs = gql`
    type UserData{
      id: ID,
      name: String,
      password: String
    }

    type Query {
      allUserData: [UserData],
      userData(id: ID): UserData
    }

    input AddNewUser {
      name: String,
      password: String
    }

    type Mutation{
      newUser(data: AddNewUser): UserData
      updateUser(id:ID, data:AddNewUser):UserData
      deleteUser(id:ID):String
    }
  `;
  const resolvers = {
    Query: {
      allUserData: async() => {
        return  await userModel.find({});
      },
      userData:async (_:never, args:{id:String}) => {
        const {id}  = args;
        return await userModel.findById(id);
      }

    },
    Mutation: {
      newUser: async (_:never,args:{data: {name:String, password:String}}) => {
        const {name, password} = args.data;     
        return await userModel.create({name, password});
      },
      updateUser:async (_:never,args:{id:String, data:{name:String, password:string}}) => {
        const {id} = args;
        const {name, password} = args.data;
        return await userModel.findByIdAndUpdate(id, {name,password});
      },
      deleteUser: async (_:never,args:{id:String}) => {
        const{id} = args;
        await userModel.findByIdAndDelete(id);
        return "User " +id+ " was successfully deleted"
      }
    }
    
  };
  
   startApolloServer();

async function startApolloServer() {
  const httpServer = http.createServer();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  
  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
};
