var express = require('express'),
	app = module.exports = express(),
	//http = require('http').Server(app),
 	engines = require('consolidate'),
 	//io = require('socket.io')(http),
 	channel = require('../../models/channel');

/*
io.on('connection', function(socket){
  console.log('a user connected');
});
*/
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/chat', function(req,res){
	res.render('chat',{
		title: 'Hola desde el chat'
	})
})
