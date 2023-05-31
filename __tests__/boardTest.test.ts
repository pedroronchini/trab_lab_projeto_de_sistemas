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

describe('Board delete', () => {
  it('should delete a board', async () => {

    const response = await request(app)
      .put('/board/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});