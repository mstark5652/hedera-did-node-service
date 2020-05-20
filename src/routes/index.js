const express = require('express')
const router = express.Router()

// did
router.use('/did', require('./did'))

module.exports = router
