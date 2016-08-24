var express = require('express')
var channels = require('./channels')

router = express.Router()
router.use('/api', channels)

module.exports = router;
