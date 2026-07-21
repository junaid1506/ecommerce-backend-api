const { register } = require("../services/auth.service");

async function registerUser(req, res, next) {
  try {
    const result = await register(req.body);

    // res.send(result);
    res.status(201).json({
      success: true,
      message: "User Create Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
    // res.json(err.name);
  }
}

module.exports = { registerUser };
