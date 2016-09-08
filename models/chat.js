"use strict";
var database = require('./../database');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');


var Chat = (function(data){
	var _name = data.name;
	var _messages = data.messages;

	var public_getNameChat = function(){
		return _name;
	}

	var public_getMessages = function(){
		return _messages;
	}

	var public_saveMessage = function(){
		var a = MongoClient.connect(database.url(), function(err, db) {
			assert.equal(err, null);
			console.log('conectado la sv');
			return true;
		});

		console.log('valor de a: ' + a);
	}

	return{
		getNameChat: public_getNameChat,
		getMessages: public_getMessages,
		saveMessage: public_saveMessage 
	}
})


module.exports = Chat;