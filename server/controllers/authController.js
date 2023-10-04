import db from './models/model.js';
import bcrypt from 'bcrypt';


const authController = {};

authController.verifyPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const verify = `SELECT * FROM users WHERE email=$1 AND password=$2`;

    let user = await db.query(verify, [email, password]);

    if (user.rows.length === 0) {
      return next({
        log: 'User not found or password incorrect',
        status: 400,
        message: {
          err: 'User not found or password incorrect',
        },
      });
    }
    const hashedPassword = user.rows[0].password;

    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordMatch) {
      return next({
        log: 'User not found or password incorrect',
        status: 400,
        message: {
          err: 'User not found or password incorrect',
        },
      });
    }
    return next();

  } catch (err) {
    return next({
      log: `authController.verifyPassword ERROR: ${err}`,
      status: 500,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

authController.createCookie = (req, res, next) => {
  try {
    const cookieName = 'userToken';
    const cookieValue = 'id123';

    // Set a cookie with a name and value
    res.cookie(cookieName, cookieValue);

    // Continue to the next middleware
    next();
  } catch (err) {
    return next({
      log: `authController.createCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating cookie',
      },
    });
  }
};

authController.createSession = (req, res, next) => {
  try {
    // Example: Create a session for the user
    req.session.user = {
      userId: 123,
      username: 'exampleUser',
    };

    // Continue to the next middleware
    next();
  } catch (err) {
    return next({
      log: `authController.createSession ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

export default authController;
