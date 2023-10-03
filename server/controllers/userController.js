const userController = {};

userController.createUser = (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = {
      username,
      email,
      password,
    };

    // Store the created user object in res.locals for subsequent middleware to access
    res.locals.createdUser = newUser;

    // Continue to the next middleware
    next();
  } catch (error) {
    // If there's an error, pass it to the error handler middleware
    next(error);
  }
};

module.exports = userController;