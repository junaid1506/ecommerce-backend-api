const HomeService = require("../services/home.service");

function getHome(req, res) {
  const result = HomeService.getHome();

  res.send(req.user);
}

module.exports = { getHome };
