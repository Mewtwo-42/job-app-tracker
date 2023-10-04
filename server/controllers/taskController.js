import db from './models/model.js';

const taskController = {};

taskController.createTask = async (req, res, next) => {
  try {
    const { name, comment, column_id } = req.body;

    const createTask = `INSERT INTO tasks (name, comment, column_id) VALUES ($1, $2, $3) RETURNING *`;

    const createdTask = await db.query(createTask, [name, comment, column_id]);

    res.locals.createdTask = createdTask;

    next();
  } catch (err) {
    return next({
      log: `taskController.createTask ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating task',
      },
    });
  }
};

taskController.getTasks = async (req, res, next) => {
  try {
    const { column_id } = req.body;

    const getTasks = `SELECT * FROM tasks WHERE column_id=$1`;

    const columnTasks = await db.query(getTasks, [column_id]);

    res.locals.columnTasks = columnTasks;
  } catch (err) {
    return next({
      log: `taskController.getTasks ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error retrieving tasks',
      },
    });
  }
};

taskController.assignTask = async (req, res, next) => {
  try {
    const { user_id, column_id } = req.body;

    const assignTask = `UPDATE tasks SET user_id = $1 WHERE column_id = $2`;

    const userTask = await db.query(assignTask, [user_id, column_id]);

    res.locals.userTask = userTask;
  } catch (err) {
    return next({
      log: `taskController.assignTask ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error assigning task',
      },
    });
  }
};

taskController.moveTask = async (req, res, next) => {
  try {
    const { column_id, task_id } = req.body;

    const moveTask = `UPDATE tasks SET column_id = $1 WHERE task_id = $2`;

    const movedTask = await db.query(moveTask, [column_id, task_id]);

    res.locals.movedTask = movedTask;
  } catch (err) {
    return next({
      log: `taskController.moveTask ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error moving task',
      },
    });
  }
};

taskController.editTask = async (req, res, next) => {
  try {
    const { comment, task_id } = req.body;

    const editTask = `UPDATE tasks SET comment = $1 WHERE task_id = $2`;

    const editedTask = await db.query(editTask, [comment, task_id]);

    res.locals.editedTask = editedTask;
  } catch (err) {
    return next({
      log: `taskController.editTask ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error editing task',
      },
    });
  }
};

taskController.deleteTask = async (req, res, next) => {
  try {
    const { task_id } = req.body;

    const deleteTask = `DELETE FROM tasks WHERE task_id = $1`;

    const deletedTask = await db.query(deleteTask, [task_id]);

    res.locals.deletedTask = deletedTask;
  } catch (err) {
    return next({
      log: `taskController.deleteTask ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error deleting task',
      },
    });
  }
};

export default taskController;
