import request from 'supertest';
import app from '../src/app';

describe('Label update', () => {
  it('should update a label', async () => {
    const updateLabel = {
      color: '#9975bd',
      text: 'Database',
      cardId: '1'
    };

    const response = await request(app)
      .put('/label/1')
      .send(updateLabel)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toBe(updateLabel);
  });
});
