import request from 'supertest';
import app from '../src/app';


describe('Card create', () => {
  it('should create a new card', async () => {
    const newCard = {
      title: 'Task1',
      date: '2022-05-05',
      boardId: '1'
    };

    const response = await request(app)
      .post('/cards')
      .send(newCard)
      .expect(201);

    expect(response.body).toHaveProperty('id');
  });
});
