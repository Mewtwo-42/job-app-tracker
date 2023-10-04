import db from './models/model.js';
import bcrypt from 'bcrypt';

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;

    const createdUser = await db.query(newUser, [
      username,
      email,
      hashedPassword,
    ]);
    // Store the created user object in res.locals for subsequent middleware to access
    res.locals.createdUser = createdUser.rows[0];


    // Continue to the next middleware
    return next();
  } catch (err) {
    return next({
      log: `userController.createUser ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating user',
      },
    });
  }
};

userController.deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    const deleteUser = `DELETE FROM users WHERE user_id = $1`;

    const deletedUser = await db.query(deleteUser, [user_id]);

    res.locals.deletedUser = deletedUser;
  } catch (err) {
    return next({
      log: `userController.deleteUser ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error deleting user',
      },
    });
  }
};

export default userController;

