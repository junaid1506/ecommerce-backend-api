const bcrypt = require("bcrypt");
const {
  findUserByEmail,
  insertUser,
  findUserWithPasswordByEmail,
} = require("../repositories/auth.repository");
const ConflictError = require("../utils/errors/ConflictError");
const UnauthorizedError = require("../utils/errors/UnauthorizedError");

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
async function login(data) {
  const { email, password } = data;
  const exisitingUser = await findUserWithPasswordByEmail(email);
  if (!exisitingUser) {
    throw new UnauthorizedError("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, exisitingUser.password);
  console.log(isMatch, "isMatch");
  if (!isMatch) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const result = {
    id: exisitingUser.id,
    name: exisitingUser.name,
    email: exisitingUser.email,
  };
  return result;
}

module.exports = { register, login };
