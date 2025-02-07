// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import projectController from '../../../../controllers/project/project';
import pageController from '../../../../controllers/page/page';
import notePageController from '../../../../controllers/page/modules/note';
import accountController from '../../../../controllers/account';
import pool from '../../../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.post('/project', projectController.create);
app.delete('/project/:id', projectController.delete);

app.post('/account/auth', accountController.login); // Login

app.post('/page', pageController.create);
app.delete('/page/:id', pageController.delete);
app.get('/page/:id', pageController.get);
app.patch('/page/:id/module', pageController.setModule);

app.post('/page/note', notePageController.newNode);
app.delete('/page/note/:nodeId', notePageController.deleteNode);
app.patch('/page/note/:nodeId', notePageController.updateNode);
app.patch('/page/note/:nodeId/:arrivalPrevNodeId', notePageController.moveNode);

describe('Note page module', () => {
  let projectId: string;
  let pageId: string;
  let nodeId: string;

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

    const response = await request(app).post('/page').send({
      title: 'New page',
      description: 'This is the new page',
      emoji: '🤪',
      projectId,
    });

    pageId = response.body.data.id;
  });

  it('Should set the page module to note', async () => {
    const response = await request(app)
      .patch(`/page/${pageId}/module`)
      .send({ module: 'notes' });

    expect(response.statusCode).toBe(200);
  });

  it('Should add a new node', async () => {
    const response = await request(app).post(`/page/note`).send({ pageId });

    nodeId = response.body.data.id;

    expect(response.statusCode).toBe(201);
  });

  it('Should update a node', async () => {
    const response = await request(app).patch(`/page/note/${nodeId}`).send({
      content: 'My header',
      type: 'h1',
      metadata: 'metadata',
    });

    expect(response.statusCode).toBe(200);
  });

  it('Should check if the node is updated', async () => {
    const response = await request(app).get(`/page/${pageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.data.module_information[1]).toMatchObject({
      id: nodeId,
      content: 'My header',
      type: 'h1',
      metadata: 'metadata',
      next_id: null,
    });
  });

  it('Should delete a node', async () => {
    const response = await request(app).delete(`/page/note/${nodeId}`);

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await request(app).delete(`/project/${projectId}`);
    await request(app).delete(`/page/${pageId}`);

    await pool.end();
  });
});
