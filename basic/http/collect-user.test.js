const request = require('supertest');
const { app, hashPassword} = require('./collect-user');
const argon2 = require('argon2');
const {Chance} = require('chance');

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

  it('should add another user data object', async () => {
    const name = chance.name(),
    id = chance.natural();
  
    const response = await request(server).post('/users').send({name, id});
    expect(response.body.data[response.body.data.length-1])
      .toStrictEqual({name, id});
  });

  it('should update corresponding user data, given the id ', async() =>{  
      const fetchResponse = await request(server).get(`/users`);
      const firstUser = fetchResponse.body.data[0];
      const updateResponse = await request(server).patch(`/users/${firstUser.id}`).send({name: 'hello'});
      expect(updateResponse.body.data[0].name).toBe('hello');
      expect(updateResponse.body.data[0].name).not.toStrictEqual(firstUser.name);    
  });
  
  it('should display the corresponding data of the id', async () => {
    const fetchResponse = await request(server).get('/users');
    const secondUser = fetchResponse.body.data[1];
    const response = await request(server).get(`/users/${secondUser.id}`);
    expect(response.body.data).toStrictEqual(secondUser);
  });

  it('should delete corresponding user data, given the id ', async() =>{
    const fetchResponse = await request(server).get('/users');
    const thirdUser = fetchResponse.body.data[2];
    const deleteResponse = await request(server).delete(`/users/${thirdUser.id}`);

    expect(Object.values(deleteResponse.body.data)).not.toContain(Object.values(thirdUser));
    expect(deleteResponse.body.data).not.toStrictEqual(fetchResponse.body.data);
    expect(fetchResponse.body.data.length-1).toBe(deleteResponse.body.data.length)

  })

});
