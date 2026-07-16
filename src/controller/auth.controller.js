const { regsiterService } = require("../services/auth.service");

async function registerUser(req, res) {
  const result = regsiterService(req.body);
  



}

module.exports = { registerUser };
