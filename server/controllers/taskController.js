import db from "./models/model.js";

const taskController = {};

taskController.createTask = (req, res, next) => {
  // Create a new task based on request data
  const newTask = {
    priority: req.body.priority,
    assigned_to: req.body.assigned_to,
    due_date: req.body.due_date,
    description: req.body.description, // other task properties...
  }; // Construct the SQL query

  const query = `
INSERT INTO tasks (priority, assigned_to, due_date, description)
VALUES ($1, $2, $3, $4)
RETURNING *
`;
  const values = [
    newTask.priority,
    newTask.assigned_to,
    newTask.due_date,
    newTask.description,
  ]; // Execute the query using db.query()

  db.query(query, values, (err, result) => {
    if (err) {
      // Handle any error that occurs during the database query
      console.error("Error executing the database query:", err);
      return next(err); // Move to the express global error handler
    } // Log the result for debugging purposes

    console.log("Query Result:", result.rows); // Store the created task data in res.locals for subsequent middleware to access

    res.locals.createdTask = result.rows[0]; // Move on to the next middleware in the route handler

    next();
  });
};

taskController.getTasks = (req, res, next) => {
  // Construct the SQL query to fetch tasks from the database
  const query = "SELECT * FROM tasks"; // Execute the query using db.query()

  db.query(query, (err, result) => {
    if (err) {
      // Handle any error that occurs during the database query
      console.error("Error executing the database query:", err);
      return next(err); // Move to the express global error handler
    } // Log the result for debugging purposes

    console.log("Query Result:", result.rows); // Store the tasks data in res.locals for subsequent middleware to access

    res.locals.tasks = result.rows; // Move on to the next middleware in the route handler

    next();
  });
};

taskController.updateTask = (req, res, next) => {
  // Update a task based on request data
  const updatedTask = {
    priority: req.body.priority,
    assigned_to: req.body.assigned_to,
    due_date: req.body.due_date,
    description: req.body.description, // other updated task properties...
  }; // Construct the SQL query to update the task in the database

  const taskId = req.params.id;
  const query = `
UPDATE tasks
SET priority = $1, assigned_to = $2, due_date = $3, description = $4
WHERE id = $5
RETURNING *
`;
  const values = [
    updatedTask.priority,
    updatedTask.assigned_to,
    updatedTask.due_date,
    updatedTask.description,
    taskId,
  ]; // Execute the query using db.query()

  db.query(query, values, (err, result) => {
    if (err) {
      // Handle any error that occurs during the database query
      console.error("Error executing the database query:", err);
      return next(err); // Move to the express global error handler
    } // Log the result for debugging purposes

    console.log("Query Result:", result.rows); // Store the updated task data in res.locals for subsequent middleware to access

    res.locals.updatedTask = result.rows[0]; // Move on to the next middleware in the route handler

    next();
  });
};

taskController.deleteTask = (req, res, next) => {
  // Delete a task from the database
  const taskId = req.params.id;
  const query = "DELETE FROM tasks WHERE id = $1";
  const values = [taskId]; // Execute the query using db.query()

  db.query(query, values, (err) => {
    if (err) {
      // Handle any error that occurs during the database query
      console.error("Error executing the database query:", err);
      return next(err); // Move to the express global error handler
    } // Store a success message in res.locals for subsequent middleware to access

    res.locals.deleteResult = {
      message: `Task with ID ${taskId} deleted successfully`,
    }; // Move on to the next middleware in the route handler

    next();
  });
};

module.exports = taskController;
