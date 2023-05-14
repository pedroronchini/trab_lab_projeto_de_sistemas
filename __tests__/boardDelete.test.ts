import request from 'supertest';
import app from '../src/app';

describe('Board delete', () => {
  it('should delete a board', async () => {

    const response = await request(app)
      .put('/board/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
