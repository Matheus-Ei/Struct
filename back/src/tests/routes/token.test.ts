// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import tokenController from '../../controllers/token';
import accountController from '../../controllers/account';
import pool from '../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.get('/check', tokenController.check);
app.get('/refresh', tokenController.refresh);
app.post('/account/auth', accountController.login); // Login

describe('Token', () => {
  let loginCookie: string;

  // Login
  beforeAll(async () => {
    const loginResponse = await request(app).post('/account/auth').send({
      email: 'dev@gmail.com',
      password: '123',
    });

    loginCookie = loginResponse.headers['set-cookie'] || '';
  });

  it('Should refresh', async () => {
    const response = await request(app)
      .get('/refresh')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(201);
  });

  it('Should check', async () => {
    const response = await request(app)
      .get('/check')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await pool.end();
  });
});
