const AppError = require("./AppError");

class UnauthorizedError extends AppError {
  constructor(message = "Authentication failed") {
    super(message, 401);
  }
}

module.exports = UnauthorizedError;
