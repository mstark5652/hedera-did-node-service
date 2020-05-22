const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ did: '2' })
})

module.exports = router
