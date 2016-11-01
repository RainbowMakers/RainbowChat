var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http')
var server = http.Server(app);
var httpProxy = require('http-proxy');
var morgan = require('morgan')
var io = require('socket.io')(server);
var cors = require('cors')
var apiRoutes = require('./api')

io.on('connection', function(socket){
	console.log('Se ha conectado un usuario');

	socket.on('envio de mensaje', function(msj){
		io.emit('envio de mensaje', msj);
	})

	socket.on('disconnect', function(){
		console.log('Se ha desconectado un usuario');
	});
});

var apiProxy = httpProxy.createProxyServer();

app.get("/", function(req, res){ 
    apiProxy.web(req, res, { target: 'http://localhost:5000/*' });
});

app.get("/static/bundle.js", function(req, res){ 
    apiProxy.web(req, res, { target: 'http://localhost:5000/' });
});

app.use(morgan('combined'));
app.use(bodyParser.json());


app.use(cors());
app.use(apiRoutes)


var runServerChat = function(puerto) {
    server.listen(puerto, function(){
        console.log('listening on *:' + puerto);
    });
};

exports.app = app;

exports.runServerChat = runServerChat;
