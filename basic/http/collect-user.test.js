const request = require('supertest');
const argon2 = require('argon2');
const { app, hashPassword} = require('./collect-user');
const {Chance} = require('chance');
const { expect } = require('@jest/globals');

const chance = new Chance();

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
  it('should not display password', async () => {
    const response = await request(server).get('/users');
    expect(Object.keys(response.body.data[0])).toStrictEqual(["id","name"]);    
  });
  it('should add another object with a password', async () => {
    const name = chance.name();
    const id = chance.natural();
    const response = await request(server).post('/users').send({name, id});
    expect(response.body.data[response.body.data.length-1])
      .toStrictEqual({name, id});
  });
  
  
});
