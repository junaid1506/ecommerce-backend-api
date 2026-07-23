const express = require("express");
const { getHome } = require("../controller/home.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, getHome);

module.exports = router;
