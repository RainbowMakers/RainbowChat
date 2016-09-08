var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var morgan = require('morgan')
var io = require('socket.io')(http);
var routes = require('./Controllers/routes');
var apiRoutes = require('./api');
var funciones = require('./lib/date');

io.on('connection', function(socket){
	console.log('Se ha conectado un usuario');

	socket.on('suscribe',function(room){
		console.log('participando del room ', room);
		socket.join(room);
	})

	socket.on('unsuscribe', function(room){
		socket.leave(room);
		console.log('se desuscribio del room ', room);
	})

	socket.on('envio de mensaje', function(data){
	    io.sockets.in(data.room).emit('envio de mensaje para frontend', data.msj);

	    var current_time = funciones.getDateTime();
	    
	    console.log(current_time);
	});
});

/*app.post('/send/:room/', function(req, res) {
    var room = req.params.room
        message = req.body;

    io.sockets.in(room).emit('message', { room: room, message: message });

    res.end('message sent');
});*/

app.use(morgan('combined'));
app.use(bodyParser.json());

/*views*/
app.use(routes.home);
app.use(routes.chat);
/*******/

app.use(apiRoutes)


var runServerChat = function(puerto) {
    http.listen(puerto, function(){
        console.log('listening on *:' + puerto);
    });
};

exports.app = app;

exports.runServerChat = runServerChat;
