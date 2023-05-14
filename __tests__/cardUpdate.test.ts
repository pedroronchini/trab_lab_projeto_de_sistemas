import request from 'supertest';
import app from '../src/app';

describe('Card update', () => {
  it('should update a card', async () => {
    const updateCard = {
      title: 'Task3',
      date: '',
      boardId: '1'
    };

    const response = await request(app)
      .put('/card/1')
      .send(updateCard)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(updateCard);
  });
});
