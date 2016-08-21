var chai = require('chai')
var assert = chai.assert
var chaiHttp = require('chai-http');
var server = require('../server')
var Chat = require('../models/chat.js')
var TestHelper = require('./test_helper')

chai.use(chaiHttp);

describe("POST /api/chats",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var testReq =  function() {
        return chai.request(server).post('/api/chats').send({
            'channel': "sarasa"
        })
    }

    it("should return 201 when chat is created",function(done){
        testReq().end(function(err,res){
            assert.equal(res.status,201)
            Chat.collection.then(function(coll){
                coll.count(function(err,val){
                    assert.equal(val,1)
                    done()
                })
            })
        })
    })
})
