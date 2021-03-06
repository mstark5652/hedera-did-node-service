const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

const customMiddleware = require('./middleware')

const app = express()

app.disable('etag')
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(helmet.hidePoweredBy({ setTo: 'StarkTech' }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'public'))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(...customMiddleware)

app.use('/', require('./routes'))

app.get('/', (req, res, next) => {
  return res.json({
    message: 'Welcome to did service.'
  })
})

// Basic error handler
app.use((err, req, res, next) => {
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  if (process.env.NODE_ENV !== 'production') {
    console.error('An error occurred.', err)
  }

  const message = process.env.NODE_ENV === 'production' ? 'Something broke!' : (err.message || err.response)
  const statusCode = err.statusCode || 500
  res.status(statusCode).send(message)
})

if (module === require.main) {
  // Start the server
  const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port
    console.log(`App listening on port ${port}`)
  })
}

module.exports = app
