var express = require('express')
var rooms = require('./rooms')

router = express.Router()
router.use('/api', rooms)

module.exports = router;
