import app from './mongoose';
import request from 'supertest';



describe('app', () => {
  
  const server = app.listen(8080);

  it('should be connected to the server and database', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toBe(200);
  });

  it('should display the collection from Users database', async () => {
     await request(server).get('/users');
  });
  it('should get the property of the name hello', async () => {
    await request(server).get('/users/:id');
  });

  it('should add another document', async () => {
     await request(server).post('/users');
  });

  it('should update existing user', async () => {
    await request(server).patch('/users/:id');
  });
  
  it('should delete existing user', async () => {
     await request(server).delete('/users/:id');
  });
  
});
