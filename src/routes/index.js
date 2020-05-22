const express = require('express')
const router = express.Router()

// did
router.use('/', require('./did'))

module.exports = router
