// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import projectController from '../../../controllers/project/project';
import pgeController from '../../../controllers/page/page';
import accountController from '../../../controllers/account';
import pool from '../../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.post('/project', projectController.create);
app.delete('/project/:id', projectController.delete);
app.post('/account/auth', accountController.login); // Login
app.post('/page', pgeController.create);
app.delete('/page/:id', pgeController.delete);
app.get('/page/:id', pgeController.get);
app.patch('/page/:id', pgeController.edit);
app.patch('/page/:id/module', pgeController.setModule);

describe('Page', () => {
  let projectId: string;
  let pageId: string;

  // Login
  beforeAll(async () => {
    const loginResponse = await request(app).post('/account/auth').send({
      email: 'dev@gmail.com',
      password: '123',
    });

    const loginCookie = loginResponse.headers['set-cookie'] || '';

    const projectResponse = await request(app)
      .post('/project')
      .set('Cookie', loginCookie)
      .send({
        title: 'Project 1',
        description: 'Description of the project',
      });

    projectId = projectResponse.body.data.id;
  });

  it('Should create', async () => {
    const response = await request(app).post('/page').send({
      title: 'New page',
      description: 'This is the new page',
      emoji: '🤪',
      projectId,
    });

    pageId = response.body.data.id;

    expect(response.statusCode).toBe(201);
  });

  it('Should get the page data', async () => {
    const response = await request(app).get(`/page/${pageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toMatchObject({
      id: pageId,
      title: 'New page',
      description: 'This is the new page',
      emoji: '🤪',
      project_id: projectId,
      parent_page_id: null,
      module_title: null,
      module_information: null,
    });
  });

  it('Should update', async () => {
    const response = await request(app).patch(`/page/${pageId}`).send({
      title: 'New page title',
      description: 'This is the new page description',
      emoji: '🥶',
    });

    expect(response.statusCode).toBe(200);
  });

  it('Should set the page module', async () => {
    const response = await request(app)
      .patch(`/page/${pageId}/module`)
      .send({ module: 'notes' });

    expect(response.statusCode).toBe(200);
  });

  it('Should get the updated page data', async () => {
    const response = await request(app).get(`/page/${pageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toMatchObject({
      id: pageId,
      title: 'New page title',
      description: 'This is the new page description',
      emoji: '🥶',
      project_id: projectId,
      parent_page_id: null,
      module_title: 'notes',
      module_information: expect.any(Array<Object>),
    });
  });

  it('Should delete', async () => {
    const response = await request(app).delete(`/page/${pageId}`);

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await request(app).delete(`/project/${projectId}`);

    await pool.end();
  });
});
