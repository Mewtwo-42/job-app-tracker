import db from './models/model.js';

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newUser =
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;

    const createdUser = await db.query(newUser, [username, email, password]);
    // Store the created user object in res.locals for subsequent middleware to access
    res.locals.createdUser = createdUser;

    // Continue to the next middleware
    next();
  } catch (error) {
    // If there's an error, pass it to the error handler middleware
    next(error);
  }
};

userController.deleteUser = async (req, res, next) => {

};

export default userController;
