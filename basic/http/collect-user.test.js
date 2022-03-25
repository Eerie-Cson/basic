const request = require('supertest');
const app = require('./collect-user');

describe('app', () => {
  const server = app.listen(8080);

//  afterAll(() => {
//    server.close();
//  });
  
  it('should have the response status of 200', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toBe(200)
  });

  it('should have the correct response body', async () => {
    const response = await request(server).get('/users');
    expect(response.body).toStrictEqual(  {
    "data": 
      {    
      "users":
        [{
          "id":"1",
          "name":"the name",
          "email":"thename@gmail.com",
          "password":"random string"
        }]
      }
  }
);
  });
});
