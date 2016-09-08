'use strict'; 

var TestHelper = require('./test_helper');
var Chat = require('./../models/chat');
var chai = TestHelper.chai;
var assert = TestHelper.chai.assert;

describe('Chat',function(){
	beforeEach(function(done){
	   TestHelper.dropDatabase(done)
	});

	var chat = new Chat({
		name: 'Test del objeto Chat',
		messages: [{
			content: 'Hola como va?',
			timestamp: '06/09/2016 23:43:40'
		},{
			content: 'Hola bien y vos?',
			timestamp: '06/09/2016 23:43:50'
		},{
			content: 'bien! todo bien!',
			timestamp: '06/09/2016 23:44:00'
		},{
			content: 'Que bueno!!',
			timestamp: '06/09/2016 23:44:20'
		}]
	});

	it('#getNameChat - debera devolver el texto "Test del objeto Chat"', function(done){
		assert.equal(chat.getNameChat(),'Test del objeto Chat');
		done();
	});

	it('#getMessages - debera devolver un array con al menos un objeto',function(done){
		assert.isAtLeast(chat.getMessages().length, 1);
		done();
	})

	it('#saveMessage(msg) - debera guardar en la db el mensaje enviado y si fue exitoso devolvera true',function(){
		assert.equal(chat.saveMessage(),true);
	})
})