async function logger(req, res, next) {
  //write the logic to log the request method
  console.log(req.method);
  //write the logic to log the request path
  console.log(req.path);
  next();
}

module.exports = { logger };
