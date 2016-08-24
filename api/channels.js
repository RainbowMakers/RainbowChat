var express = require('express')
router = express.Router()
var Channel = require('../models/channel')

router.get('/channels', function (req, res) {
    Channel.all(function(err,channels){
        res.status(200).send(channels)
    })
});

router.post('/channels', function (req, res) {
    var channel = new Channel(req.body)
    channel.save(function(err,doc){
        res.status(201).send(doc)
    });
});

module.exports = router
