var server = require('../server').app
var Chat = require('../models/chat.js')
var TestHelper = require('./test_helper')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert

describe("POST /api/chats",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var testReq =  function() {
        return chai.request(server).post('/api/chats').send({
            'channel': "sarasa"
        })
    }
    var statusCode = testReq().then(function(res){
        return res.status 
    }) 

    it("should return 201 when chat is created",function(done){
        testReq().end(function(err,res){
            assert.equal(res.status,201)
            done();
        })
    })
})
