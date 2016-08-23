var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./Controllers/routes');


app.use(bodyParser.json());

/*views*/
app.use(routes.home);
app.use(routes.chat);
/*******/

app.post('/api/chats', function (req, res) {
    var chat = new Chat(req.body)
    chat.save(function(err,doc){
        res.status(201).send(doc)
    });
});

module.exports = app;