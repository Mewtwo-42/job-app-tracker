import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

//Route for creating users
userRouter.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.createdUser);
});

//Route for deleting users
userRouter.delete('/', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.deletedUser);
});

export default userRouter;

