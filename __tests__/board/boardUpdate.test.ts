import request from 'supertest';
import app from '../../src/app';

describe('Board update', () => {
  it('should update a board', async () => {
    const updateBoard = {
      title: 'Doing'
    };

    const response = await request(app)
      .put('/board/1')
      .send(updateBoard)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(updateBoard.title);
  });
});
