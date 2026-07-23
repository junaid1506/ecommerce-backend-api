const UnauthorizedError = require("../utils/errors/UnauthorizedError");
const { verfiyAccessToken } = require("../utils/jwt");

function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new UnauthorizedError("Access token is missing");
    }
    const decoded = verfiyAccessToken(token);
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    next(err);
  }
}

module.exports = { authMiddleware };
