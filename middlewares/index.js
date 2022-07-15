const notFoundHandler = require('./not-found-handler.middleware')
const internalServerErrorHandler = require('./internal-server-error-handler.middleware')

module.exports = {
  notFoundHandler,
  internalServerErrorHandler
}