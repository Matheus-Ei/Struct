// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import accountController from '../../controllers/account';
import pool from '../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.post('/account/auth', accountController.login);
app.delete('/account/auth', accountController.logout);
app.delete('/account', accountController.delete);
app.get('/account', accountController.getCurrent);
app.patch('/account', accountController.update);
app.post('/account', accountController.register);

describe('Account', () => {
  let loginCookie: string;

  it('Should register', async () => {
    const response = await request(app).post('/account').send({
      full_name: 'Tester',
      nickname: 'test',
      email: 'test@gmail.com',
      password: '123',
    });

    loginCookie = response.headers['set-cookie'] || '';

    expect(response.statusCode).toBe(201);
  });

  it('Should logout from the register', async () => {
    const response = await request(app)
      .delete('/account/auth')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
  });

  it('Should login', async () => {
    const response = await request(app).post('/account/auth').send({
      email: 'test@gmail.com',
      password: '123',
    });

    loginCookie = response.headers['set-cookie'] || '';

    expect(response.statusCode).toBe(200);
  });

  it('Should get the current account', async () => {
    const response = await request(app)
      .get('/account')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toMatchObject({
      id: expect.any(Number),
      full_name: 'Tester',
      nickname: 'test',
      email: 'test@gmail.com',
      bio: null,
      password: expect.any(String),
      is_verified: expect.any(Boolean),
      picture: null,
      created_at: expect.any(String),
    });
  });

  it('Should update the account info', async () => {
    const response = await request(app)
      .patch('/account')
      .send({
        full_name: 'The best tester',
        bio: 'This is my new bio for tests',
      })
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
  });

  it('Should get the current account after update', async () => {
    const response = await request(app)
      .get('/account')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toMatchObject({
      id: expect.any(Number),
      full_name: 'The best tester',
      nickname: 'test',
      email: 'test@gmail.com',
      bio: 'This is my new bio for tests',
      password: expect.any(String),
      is_verified: expect.any(Boolean),
      picture: null,
      created_at: expect.any(String),
    });
  });

  it('Should logout', async () => {
    const response = await request(app)
      .delete('/account/auth')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
  });

  it('Should delete', async () => {
    const response = await request(app)
      .delete('/account')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await pool.end();
  });
});
