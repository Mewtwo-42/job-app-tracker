import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

//import routers
import authRouter from './routes/authRouter.js';
import columnRouter from './routes/columnRouter.js';
import projectRouter from './routes/projectRouter.js';
import taskRouter from './routes/taskRouter.js';
import teamRouter from './routes/teamRouter.js';
import userRouter from './routes/userRouter.js';

// const userRouter = require("./routes/userRouter"); // will need once 'userRouter' is created 

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//serve static files

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

// Add a 'hello world' endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Route handler
app.use('/api/auth', authRouter);
app.use('/api/column', columnRouter);
app.use('/api/project', projectRouter);
app.use('/api/task', taskRouter);
app.use('/api/team', teamRouter);
app.use('/api/user', userRouter); 


//Global Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {

  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);

  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

export default app;



