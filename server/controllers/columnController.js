import db from './models/model.js';

const columnController = {};

columnController.createColumn = async (req, res, next) => {
  try {
    const { name, project_id } = req.body;

    const newColumn = `INSERT INTO columns (name, project_id) VALUES ($1, $2)`;

    const createdColumn = await db.query(newColumn, [name, project_id]);

    res.locals.createdColumn = createdColumn;
  } catch (err) {
    return next({
      log: `columnController.createColumn ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating column',
      },
    });
  }
};

columnController.getColumn = async (req, res, next) => {
  try {
    const { project_id } = req.body;

    const getColumns = `SELECT * FROM columns WHERE project_id=$1`;

    const projectColumns = await db.query(getColumns, [project_id]);

    res.locals.projectColumns = projectColumns;
  } catch (err) {
    return next({
      log: `columnController.getColumn ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error retrieving column',
      },
    });
  }
};

columnController.updateColumn = async (req, res, next) => {
  try {
    const { name, project_id } = req.body;

    const updateColumn = `UPDATE columns SET name = $1 WHERE project_id = $2`;

    const newColumn = await db.query(updateColumn, [name, project_id]);

    res.locals.newColumn = newColumn;
  } catch (err) {
    return next({
      log: `columnController.updateColumn ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error updating column',
      },
    });
  }
};

columnController.deleteColumn = async (req, res, next) => {
  try {
    const { name, project_id } = req.body;

    const deleteColumn = `DELETE FROM columns WHERE name = $1 AND project_id = $2`;

    const deletedColumn = await db.query(deleteColumn, [name, project_id]);

    res.locals.deletedColumn = deletedColumn;
  } catch (err) {
    return next({
      log: `columnController.deleteColumn ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error deleting column',
      },
    });
  }
};

export default columnController;
