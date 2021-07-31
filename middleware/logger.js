// Middleware is called ever time a server response to client request
// Normally use for validating data before updating existing one
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
}

module.exports = logger
