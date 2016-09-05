var express = require('express')
router = express.Router()
var Channel = require('../models/channel')
var mongo = require('mongodb')

router.get('/channels', function (req, res) {
    Channel.all(function(err,channels){
        res.status(200).send(channels)
    })
});

router.get('/channel/:id', function (req, res) {
    Channel.findOne({_id: mongo.ObjectId(req.params.id)}, function(err,channel){
        res.status(200).send(channel)
    })
});

router.post('/channels', function (req, res) {
    var channel = new Channel(req.body)
    channel.save(function(err,doc){
        res.status(201).send(doc)
    });
});

module.exports = router
