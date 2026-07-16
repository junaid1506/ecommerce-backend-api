function errorMidlleware(err, req, res, next) {
  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map((issue) => issue.message),
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}

module.exports = errorMidlleware;
