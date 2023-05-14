import request from 'supertest';
import app from '../../src/app';

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
