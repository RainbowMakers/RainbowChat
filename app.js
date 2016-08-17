var http = require('http'),
	express = require('express'),
    app = express(),
    home = require('./Controllers/home');

    app.use(home);

	var server = app.listen(3000,function(){
		var port = server.address().port;
		console.log('Express server listening on port %s.', port);
	
	});