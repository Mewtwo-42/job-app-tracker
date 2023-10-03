const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');
const router = express.Router();

// Create a new task (set a cookie and then create a session)
router.post(
  '/',
  authController.createCookie, // Set a cookie
  authController.createSession, // Create a session for the user
  taskController.createTask,
  (req, res) => {
    return res.status(200).json(res.locals.createdTask);
  }
);

// Get all tasks (set a cookie and then create a session)
router.get(
  '/',
  authController.createCookie, // Set a cookie
  authController.createSession, // Create a session for the user
  taskController.getTasks,
  (req, res) => {
    return res.status(200).json(res.locals.tasks);
  }
);

// Update a task (set a cookie and then create a session)
router.patch(
  '/:id',
  authController.createCookie, // Set a cookie
  authController.createSession, // Create a session for the user
  taskController.updateTask,
  (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
  }
);

// Delete a task (set a cookie and then create a session)
router.delete(
  '/:id',
  authController.createCookie, // Set a cookie
  authController.createSession, // Create a session for the user
  taskController.deleteTask,
  (req, res) => {
    return res.status(200).json(res.locals.deleteResult);
  }
);

module.exports = router;