import request from 'supertest';
import app from '../src/app';

describe('Card delete', () => {
  it('should delete a card', async () => {

    const response = await request(app)
      .put('/card/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
