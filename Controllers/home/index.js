var express = require('express'),
	app = module.exports = express(),
 	engines = require('consolidate');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', function(req,res){
	res.render('home',{
		title: 'Hola desde la home'
	})
})