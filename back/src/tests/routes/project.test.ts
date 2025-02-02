// Library
import request, { Response } from 'supertest';
import express from 'express';

// Local
import ProjectController from '../../controllers/project/project';

const app = express();
app.use(express.json());

// Routes
app.post('/project', ProjectController.create);
app.delete('/project/:id', ProjectController.delete);
app.get('/project', ProjectController.getAll);
app.get('/project/:id', ProjectController.get);
app.get('/project/:id', ProjectController.getPages);
app.patch('/project/:id', ProjectController.edit);

describe('Project', () => {
  describe('Create', () => {
    let response: Response;

    beforeAll(async () => {
      const newProject = {
        title: 'Project 1',
        description: 'Description of project',
      };

      response = await request(app).post('/project').send(newProject);
    });

    it('Should return 201 status', () => {
      expect(response.statusCode).toEqual(201);
    });

    it('Should have a success message', () => {
      expect(response.body.message).toBe('Project created');
    });
  });
});
