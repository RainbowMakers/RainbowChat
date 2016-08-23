var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
	console.log('Se ha conectado un usuario');

	socket.on('envio de mensaje', function(msj){
		io.emit('envio de mensaje', msj);
	})

	socket.on('disconnect', function(){
		console.log('Se ha desconectado un usuario');
	});
});


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


var runServerChat = function(puerto) {
	http.listen(puerto, function(){
	  console.log('listening on *:' + puerto);
	});
};

exports.app = app;

exports.runServerChat = runServerChat;