const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_SECRET,
} = require("../config/env");
function generateAccessToken(payload) {
  const token = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  return token;
}
function generateRefreshToken(payload) {}
function verfiyAccessToken(token) {
  const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
  return decoded;
}
function verfiyRefreshToken(token) {}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verfiyAccessToken,
  verfiyRefreshToken,
};
