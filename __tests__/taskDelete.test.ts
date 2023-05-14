import request from 'supertest';
import app from '../src/app';

describe('Task delete', () => {
  it('should delete a task', async () => {

    const response = await request(app)
      .put('/task/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
