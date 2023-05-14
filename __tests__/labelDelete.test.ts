import request from 'supertest';
import app from '../src/app';

describe('Label delete', () => {
  it('should delete a label', async () => {

    const response = await request(app)
      .put('/label/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
