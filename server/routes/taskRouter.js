import express from 'express';
import taskController from '../controllers/taskController.js';
import authController from '../controllers/authController.js';

const taskRouter = express.Router();

// Create a new task 
taskRouter.post(
  '/',
  taskController.createTask,
  (req, res) => {
    return res.status(200).json(res.locals.createdTask);
  }
);

// Get all tasks 
taskRouter.get(
  '/',
  taskController.getTasks,
  (req, res) => {
    return res.status(200).json(res.locals.columnTasks);
  }
);

// Update a task (set a cookie and then create a session)
taskRouter.patch(
  '/',
  taskController.updateTask,
  (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
  }
);

// Delete a task (set a cookie and then create a session)
taskRouter.delete(
  '/:id',
  authController.createCookie, // Set a cookie
  authController.createSession, // Create a session for the user
  taskController.deleteTask,
  (req, res) => {
    return res.status(200).json(res.locals.deleteResult);
  }
);

export default taskRouter;