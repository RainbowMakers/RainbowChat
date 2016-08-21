var express = require('express');
var app = express();
var Chat = require('./models/chat')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/api/chats', function (req, res) {
    var chat = new Chat(req.body)
    chat.save(function(err,doc){
        res.status(201).send(doc)
    })
});

module.exports = app
