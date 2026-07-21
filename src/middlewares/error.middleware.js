function errorMidlleware(err, req, res, next) {
  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map((issue) => issue.message),
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown / unexpected errors
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}

module.exports = errorMidlleware;
