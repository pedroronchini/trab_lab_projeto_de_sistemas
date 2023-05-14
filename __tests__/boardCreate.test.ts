import request from 'supertest';
import app from '../src/app';

describe('Board create', () => {
  it('should create a new board', async () => {
    const newBoard = {
      title: 'Discover'
    };

    const response = await request(app)
      .post('/board')
      .send(newBoard)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newBoard.title);
  });
});
