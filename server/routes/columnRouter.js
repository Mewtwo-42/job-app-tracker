import express from 'express';
import columnController from '../controllers/columnController.js';

const columnRouter = express.Router();

//route for creating a column
columnRouter.post('/', columnController.createColumn, (req, res) => {
  res.status(200).json(res.locals.createdColumn);
});

//route for retrieving columns
columnRouter.get('/', columnController.getColumn, (req, res) => {
  res.status(200).json(res.locals.projectColumns);
});

//route for updating a column
columnRouter.patch('/', columnController.updateColumn, (req, res) => {
  res.status(200).json(res.locals.newColumn);
});

//route for deleting a column
columnRouter.delete('/', columnController.deleteColumn, (req, res) => {
  res.status(200).json(res.locals.deletedColumn);
});

export default columnRouter;

