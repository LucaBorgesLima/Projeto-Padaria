const request = require('supertest');
const app = require('../app');


describe("Criar numero unico para um pedido", () => {

  test('Deve retornar status 200 e numero do pedido', async () => {
    const response = await app.request(app).post('/pedido').send();
    expect(response.status).toBe(200);
      
  });
  test('Deve retornar 404 para uma rota inexistente', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
  });
    
});