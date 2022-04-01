const request = require('supertest');
const app = require('./mongoose');
const mongoose = require('mongoose');
const R = require('ramda');

describe('app', () => {
  
  const server = app.listen(8080);
  afterAll(() => {
    server.close();
    mongoose.disconnect();
  });
 

  it('should have the response status of 200', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toBe(200);
    expect(mongoose.connection.readyState).toBe(1);
  });

  it('should get the property of the name hello', async () => {
    const response = await request(server).get('/users');
    expect(response.body.data).toStrictEqual([
      { 
        "_id" : "62468629f5bd467b58b4acac", 
        "name" : "AShiuh", 
        "password" : "hsonbui"
    },
    { 
        "_id" : "6246867af5bd467b58b4acad", 
        "name" : "kooil", 
        "password" : "inuio"
    },
    { 
        "_id" : "6246867bf5bd467b58b4acae", 
        "name" : "hello", 
        "password" : "noihjn"
    }
    ]);    
  });

    
});
