import request from 'supertest';
import app from '../src/app';

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
