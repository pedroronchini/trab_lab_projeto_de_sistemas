import request from 'supertest';
import app from '../src/app';

describe('Label create', () => {
  it('should create a new label', async () => {
    const newLabel = {
      color: '#1ebffa',
      text: 'Frontend',
      cardId: '1'
    };

    const response = await request(app)
      .post('/label')
      .send(newLabel)
      .expect(201);

    expect(response.body).toHaveProperty('id');
  });
});
