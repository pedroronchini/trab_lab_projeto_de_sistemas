import request from 'supertest';
import app from '../src/app';

describe('Task create', () => {
  it('should create a new task', async () => {
    const newTask = {
      completed: 'true', 
      text: 'Task1_subtask1', 
      cardId: '1'
    };

    const response = await request(app)
      .post('/task')
      .send(newTask)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.completed).toBe(newTask.completed);
    expect(response.body.text).toBe(newTask.text);
    expect(response.body.cardId).toBe(newTask.cardId);
  });
});

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

describe('Task delete', () => {
  it('should delete a task', async () => {

    const response = await request(app)
      .put('/task/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});
