class NotFoundError {
  constructor (message) {
    this.name = 'NotFoundError'
    this.statusCode = 404
    this.message = message
  }
}

class ValidationError {
  constructor (param) {
    this.name = 'ValidationError'
    this.statusCode = 400
    this.message = typeof param === 'string' ? param : 'Validation error'
    this.errors = typeof param === 'string' ? [] : param
  }
}

class BadRequestError {
  constructor (message) {
    this.name = 'BadRequestError'
    this.statusCode = 400
    this.message = message
  }
}

module.exports = {
  NotFoundError,
  ValidationError,
  BadRequestError
}
