var express = require('express')
router = express.Router()
var Channel = require('../models/channel')

router.post('/channels', function (req, res) {
    var chat = new Channel(req.body)
    chat.save(function(err,doc){
        res.status(201).send(doc)
    });
});

module.exports = router
