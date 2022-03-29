const request = require('supertest');
const { app, hashPassword,argon2 } = require('./collect-user');

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
    const hashedPassword = hashPassword(str);
    const verified = await argon2.verify("<big long hash>", "password");
    expect(verified).toBe(true);
  });

  it('should have the correct response body', async () => {
    const response = await request(server).get('/users');
    expect(response.body).toStrictEqual({
      "data": {
        "users": [
          {
            "id": "1",
            "name": "the name",
            "email": "thename@gmail.com",
            "password": "random string"
          }
        ]
      }
    });
  });
  
});
