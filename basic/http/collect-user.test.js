const request = require('supertest');
const argon2 = require('argon2');
const { app, hashPassword} = require('./collect-user');
const {Chance} = require('chance');
const { expect } = require('@jest/globals');

const chance = new Chance(),
  name = chance.name(),
  id = chance.natural();

describe('app', () => {
  afterAll(() => {
    server.close();
  });
  

  const server = app.listen(8080);

  
  it('should have the response status of 200', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toBe(200)
  });
  it('should accept string password', async () => {
    const str = 'testing';
    const hashedPassword = await hashPassword(str);
    const verified = await argon2.verify(hashedPassword, str);
    expect(verified).toBe(true);
  });
  it.only('should not display password', async () => {
    const response = await request(server).get('/users');
    console.log(response.body.data);
    expect(Object.keys(response.body.data[0])).toStrictEqual(["id","name"]);    
  });

  it('should add another object with a password', async () => {
    const response = await request(server).post('/users').send({name, id});
    expect(response.body.data[response.body.data.length-1])
      .toStrictEqual({name, id});
  });

  it.only('should update existing object', async() =>{

    const response = await request(server).patch('/users').send({name, id});
    console.log(response.body.data);
    expect(response.body.data[1])
      .toStrictEqual({name, id});
  })
  
  
});
