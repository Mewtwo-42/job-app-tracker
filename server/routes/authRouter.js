import express from 'express';
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/', authController.verifyPassword, (req, res) => {
  res.sendStatus(200);
});

export default authRouter;

