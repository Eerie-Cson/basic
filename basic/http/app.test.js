const request = require('supertest');
const app = require('./app');

describe('app', () => {
  // We're listening to PORT 8080 during the test ONLY
  const server = app.listen(8080);
	
	// This is a hook for test, it means we're closing the PORT after all
  // the assertions are done
  afterAll(() => {
    server.close();
  });

  it('should have the response status of 200', async () => {
		// We're requesting to localhost:8080/
    const response = await request(server).get('/');
		
		// We're asserting the status code of the endpoint
    // 200 - means it's a success
    expect(response.status).toBe(200)
  });

  it('should have the correct response body', async () => {
    const response = await request(server).get('/');

    expect(response.body).toStrictEqual({ message: 'Hello, world!' });
  });
})
