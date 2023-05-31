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
      .post('/card')
      .send(newCard)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newCard.title);
    expect(response.body.date).toBe(newCard.date);
    expect(response.body.boardId).toBe(newCard.boardId);
  });
});

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
    expect(response.body).toBe(updateCard);
  });
});


describe('Card delete', () => {
  it('should delete a card', async () => {

    const response = await request(app)
      .put('/card/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
