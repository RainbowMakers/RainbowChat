var chai = require('chai'),
    mocha = require('mocha'),
    should = chai.should();

var io = require('socket.io-client');

describe("echo", function () {

    var server,
    options ={
        transports: ['websocket'],
        'force new connection': true
    };

    beforeEach(function (done) {
        // start the server
        server = require('../server').runServerChat(3005);
        done();
    });

    it("simple test message", function (done) {
        var client = io.connect("http://localhost:3005", options);

        client.once("connect", function () {
            client.emit("envio de mensaje", "test message");
            client.once("envio de mensaje", function (message) {
                message.should.equal("test message");

                client.disconnect();
                done();
            });
        });
    });
})
