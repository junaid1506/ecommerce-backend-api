const HomeService = require("../services/home.service");

function getHome(req, res) {
  const result = HomeService.getHome();

  res.send(result);
}

module.exports = { getHome };
