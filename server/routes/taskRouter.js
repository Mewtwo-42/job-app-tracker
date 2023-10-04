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

// Edit a task 
taskRouter.patch(
  '/',
  taskController.editTask,
  (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
  }
);

// Assign task to a user
taskRouter.patch(
  '/assign',
  taskController.assignTask,
  (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
  }
);

// Move task to different column
taskRouter.patch(
  '/move',
  taskController.moveTask,
  (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
  }
);

// Delete a task 
taskRouter.delete(
  '/:id',
  taskController.deleteTask,
  (req, res) => {
    return res.status(200).json(res.locals.deleteResult);
  }
);

export default taskRouter;



