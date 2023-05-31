import request from 'supertest';
import app from '../src/app';

describe('User create', () => {
  it ('should create a new user', async () => {
    const newUser = {
      name: 'Pedro',
      email: 'pedro@example3.com.br',
      password: '123456',
      area: 'dev',
    };

    const response = await request(app)
      .post('/users')
      .send(newUser)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
  });

  it('should not create a new user with invalid data', async () => {
    const newUser = {
      name: '',
      email: 'pedro@example.com',
      password: '',
    }

    const response = await request(app)
      .post('/users')
      .send(newUser)
      .expect(400)

    expect(response.body).toHaveProperty('error');
  });
});

describe('User update', () => {
  it ('should update a user', async() => {
    const userId = '6d5ac45f-8b68-49b7-9b5d-af202d8d36af';
    
    const updateUser = {
      email: 'pedro@example.com',
      password: '123456789@',
    };

    const response = await request(app)
      .put(`/users/${userId}`)
      .send(updateUser)
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });
});


describe('User delete', () => {
  it ('should delete a user', async() => {
    const userId = 'a52ed3e8-d8c6-4fa4-b885-8e2333a7629f';

    const response = await request(app)
      .delete(`/users/${userId}`)
      .expect(200);

    expect(response.body.id).toBe(userId);
    expect(response.body).toHaveProperty('message');
  });
});