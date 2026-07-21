const bcrypt = require("bcrypt");
const {
  findUserByEmail,
  insertUser,
} = require("../repositories/auth.repository");
const ConflictError = require("../utils/errors/ConflictError");

async function register(data) {
  const { name, email, password } = data;

  const existingUser = await findUserByEmail(email);

  // return existingUser;

  if (existingUser) {
    throw new ConflictError("Email already exists");
  }

  const hassedPassword = await bcrypt.hash(password, 10);

  const user = await insertUser(name, email, hassedPassword);

  return user;
}

module.exports = { register };
