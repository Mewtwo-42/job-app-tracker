import express from 'express';
import userController from '../controllers/userController';

const userRouter = express.Router();

//Route for creating users
userRouter.post('/', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

//Route for deleting users
userRouter.delete('/', userController.deleteUser, (req, res) => {
  res.sendStatus(200);
});

export default userRouter;
