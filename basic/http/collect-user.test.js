const request = require('supertest');
const argon2 = require('argon2');
const { app, hashPassword} = require('./collect-user');

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
  
});
