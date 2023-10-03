import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
const PORT = 3000;

//import routers
import taskRouter from "./routes/taskRouter";
// const userRouter = require("./routes/userRouter"); // will need once 'userRouter' is created 

app.use(express.json()); 
app.use(cookieParser());
app.use(cors());

//serve static files
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

//Route handler
app.use("/api/tasks", taskRouter);

//Global Error Handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

module.exports = app;


