var express = require('express'),
	app = module.exports = express(),
 	engines = require('consolidate'),
 	chat = require('../../models/chat');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/chat', function(req,res){
	res.render('chat',{
		title: 'Hola desde el chat'
	})
})