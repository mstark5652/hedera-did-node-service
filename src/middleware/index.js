/**
 * Middleware to find client ip address and attach to request.
 */
const ip = (req, res, next) => {
  req.clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  next()
}

const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

module.exports = {
  ip,
  requestTime
}
