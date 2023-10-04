import express from 'express';
import projectController from '../controllers/projectController.js';

const projectRouter = express.Router();

//route for creating a column
projectRouter.post('/', projectController.createProject, (req, res) => {
  res.status(200).send(res.locals.createdProject);
});

//route for retrieving columns
projectRouter.get('/', projectController.getProject, (req, res) => {
  res.status(200).send(res.locals.teamProjects);
});

//route for updating a column
projectRouter.patch('/', projectController.updateProject, (req, res) => {
  res.status(200).send(res.locals.newProject);
});

//route for deleting a column
projectRouter.delete('/', projectController.deleteProject, (req, res) => {
  res.status(200).send(res.locals.deletedProject);
});

export default projectRouter;
