import request from 'supertest';
import app from '../src/app';

describe('Task create', () => {
  it('should create a new task', async () => {
    const newTask = {
      completed: true, 
      text: 'Task1_subtask1', 
      cardId: '1'
    };

    const response = await request(app)
      .post('/tasks')
      .send(newTask)
      .expect(201);

    expect(response.body).toHaveProperty('id');
  });
});
