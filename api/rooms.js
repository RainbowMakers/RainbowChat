var express = require('express')
router = express.Router()
var Room = require('../models/room')
var mongo = require('mongodb')

router.get('/rooms', function (req, res) {
    Room.all(function(err,rooms){
        res.status(200).send(rooms)
    })
});

router.get('/room/:id', function (req, res) {
    Room.findOne({_id: mongo.ObjectId(req.params.id)}, function(err,room){
        res.status(200).send(room)
    })
});

router.post('/rooms', function (req, res) {
    var room = new Room(req.body)
    room.save().then(function(doc){
        res.status(201).send(doc)
    })
});

module.exports = router
