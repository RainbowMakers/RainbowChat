var server = require('../server').app
var Channel = require('../models/channel.js')
var TestHelper = require('./test_helper')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert

describe("POST /api/channels",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var testReq =  function() {
        return chai.request(server).post('/api/channels').send({
            'channel': "sarasa"
        })
    }
    var statusCode = testReq().then(function(res){
        return res.status 
    }) 

    it("should return 201 when channel is created",function(done){
        testReq().end(function(err,res){
            assert.equal(res.status,201)
            done();
        })
    })
})
