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
    expect(response.body.color).toBe(newLabel.color);
    expect(response.body.text).toBe(newLabel.text);
    expect(response.body.cardId).toBe(newLabel.cardId);
  });
});

describe('Label update', () => {
  it('should update a label', async () => {
    const updateLabel = {
      color: '#9975bd',
      text: 'Database',
      cardId: '1'
    };

    const response = await request(app)
      .put('/label/1')
      .send(updateLabel)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toBe(updateLabel);
  });
});

describe('Label delete', () => {
  it('should delete a label', async () => {

    const response = await request(app)
      .put('/label/1')
      .expect(200);

    expect(response.body).toBe('id');
  });
});