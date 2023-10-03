import db from "./models/model.js";

const authController = {};

authController.createCookie = (req, res, next) => {
  try {

    const cookieName = 'userToken';
    const cookieValue = 'id123';

    // Set a cookie with a name and value
    res.cookie(cookieName, cookieValue);

    // Continue to the next middleware
    next();
  } catch (error) {
    // If there's an error, pass it to the error handler middleware
    next(error);
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
  } catch (error) {
    // If there's an error, pass it to the error handler middleware
    next(error);
  }
};

module.exports = authController;