// Library
import request from 'supertest';
import cookieParser from 'cookie-parser';
import express from 'express';

// Local
import projectController from '../../../controllers/project/project';
import accountController from '../../../controllers/account';
import pageController from '../../../controllers/page/page';
import pool from '../../../services/database';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes definition
app.post('/project', projectController.create);
app.get('/project', projectController.getAll);
app.delete('/project/:id', projectController.delete);
app.get('/project/:id', projectController.get);
app.patch('/project/:id', projectController.edit);
app.get('/project/pages/:id', projectController.getPages);
app.post('/account/auth', accountController.login); // Login
app.post('/page', pageController.create);

describe('Project', () => {
  let projectId: string;
  let loginCookie: string;

  // Login
  beforeAll(async () => {
    const response = await request(app).post('/account/auth').send({
      email: 'dev@gmail.com',
      password: '123',
    });

    loginCookie = response.headers['set-cookie'] || '';
  });

  it('Should create', async () => {
    const response = await request(app)
      .post('/project')
      .set('Cookie', loginCookie)
      .send({
        title: 'Project 1',
        description: 'Description of the project',
      });

    if (response.body.data && response.body.data?.id)
      projectId = response.body.data.id;

    expect(response.statusCode).toEqual(201);
  });

  it('Should get all projects', async () => {
    const response = await request(app)
      .get('/project')
      .set('Cookie', loginCookie);

    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data[response.body.data.length - 1]).toMatchObject({
      id: projectId,
      title: 'Project 1',
      created_at: expect.any(String),
      owner_account_id: expect.any(Number),
      description: 'Description of the project',
    });
  });

  it('Should get the project', async () => {
    const response = await request(app).get(`/project/${projectId}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toMatchObject({
      title: 'Project 1',
      description: 'Description of the project',
      id: projectId,
      number_pages: '0',
      number_shared: '0',
    });
  });

  it('Should update', async () => {
    const response = await request(app).patch(`/project/${projectId}`).send({
      title: 'Updated title',
      description: 'New description',
    });

    expect(response.statusCode).toEqual(200);
  });

  it('Should get the project updated', async () => {
    const response = await request(app).get(`/project/${projectId}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toMatchObject({
      title: 'Updated title',
      description: 'New description',
      id: projectId,
      number_pages: '0',
      number_shared: '0',
    });
  });

  describe('Pages', () => {
    let pageId: string;

    beforeAll(async () => {
      const response = await request(app).post('/page').send({
        title: 'New page',
        description: 'This is the new page',
        projectId,
      });

      pageId = response.body.data.id;
    });

    it('Should get all pages from the project', async () => {
      const response = await request(app).get(`/project/pages/${projectId}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data[0]).toMatchObject({
        id: pageId,
        title: 'New page',
        description: 'This is the new page',
        position: null,
        emoji: null,
        parent_page_id: null,
        child_pages: [],
      });
    });
  });

  it('Should delete', async () => {
    const response = await request(app).delete(`/project/${projectId}`);

    expect(response.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await pool.end();
  });
});
