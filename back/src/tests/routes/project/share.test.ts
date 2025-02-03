// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import projectController from '../../../controllers/project/project';
import shareController from '../../../controllers/project/share';
import accountController from '../../../controllers/account';
import pool from '../../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.post('/project', projectController.create);
app.delete('/project/:id', projectController.delete);
app.post('/project/share/:id', shareController.share);
app.get('/project/share/:id', shareController.get);
app.delete('/project/share/:id/:nickname', shareController.unshare);
app.post('/account/auth', accountController.login); // Login

describe('Share', () => {
  let projectId: string;
  let loginCookie: string;

  // Login
  beforeAll(async () => {
    const loginResponse = await request(app).post('/account/auth').send({
      email: 'dev@gmail.com',
      password: '123',
    });

    loginCookie = loginResponse.headers['set-cookie'] || '';

    const projectResponse = await request(app)
      .post('/project')
      .set('Cookie', loginCookie)
      .send({
        title: 'Project 1',
        description: 'Description of the project',
      });

    projectId = projectResponse.body.data.id;
  });

  it('Should share', async () => {
    const response = await request(app)
      .post(`/project/share/${projectId}`)
      .send({
        nickname: 'dev',
        role: 'admin',
      });

    expect(response.statusCode).toBe(201);
  });

  it('Should show all shares', async () => {
    const response = await request(app).get(`/project/share/${projectId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]).toMatchObject({
      project_id: projectId,
      role_id: expect.any(Number),
      role_name: 'admin',
      role_description: expect.any(String),
      account_id: expect.any(Number),
      account_full_name: expect.any(String),
      account_nickname: 'dev',
      account_email: expect.any(String),
      account_picture: null,
    });
  });

  it('Should unshare', async () => {
    const response = await request(app).delete(
      `/project/share/${projectId}/dev`,
    );

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    const response = await request(app).delete(`/project/${projectId}`);

    expect(response.statusCode).toEqual(200);

    await pool.end();
  });
});
