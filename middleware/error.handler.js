async function Errorhandler(err, req, res, next) {
  //write the logic to send the error status and error message
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
  next();
}
module.exports = { Errorhandler };
