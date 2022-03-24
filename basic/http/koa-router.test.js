const request = require('supertest');
const app = require('./koa-router');

describe('app', () => {
  const server = app.listen(8080);

  afterAll(() => {
    server.close();
  });

  it('should have the response status of 200', async () => {
    const response = await request(server).get('/api');

    expect(response.status).toBe(200)
  });

  it('should have the correct response body', async () => {
    const response = await request(server).get('/api');
    expect(response.body).toStrictEqual({ message: 'Welcome to the API' });
  });
});
