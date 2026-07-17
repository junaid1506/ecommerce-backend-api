const { regsiterService } = require("../services/auth.service");

async function registerUser(req, res) {
  const result = await regsiterService(req.body);
  res.send(result);
}

module.exports = { registerUser };
