import request from 'supertest';
import app from '../../src/app';

describe('Task update', () => {
  it('should update a task', async () => {
    const updateTask = {
      completed: 'false',
      text: 'restore db',
      cardId: '1'
    };

    const response = await request(app)
      .put('/task/1')
      .send(updateTask)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toBe(updateTask);
  });
});
