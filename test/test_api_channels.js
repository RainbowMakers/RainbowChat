var server = require('../server').app
var Channel = require('../models/channel.js')
var TestHelper = require('./test_helper')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert

describe("api/",function(){
    beforeEach(function() {
        return assert.eventually.equal(Promise.resolve(TestHelper.dropDatabase()))
    });

    describe("GET /api/channels",function(){
        var createChannel =  function() {
            return chai.request(server).post('/api/channels').send({
                'name': "sarasa"
            })
        }

        var request =  function() {
            return chai.request(server).get('/api/channels')
        }

        it("should return 200 with array of channels",function(done){
            createChannel().end(function(err,res){
                request().end(function(err,res){
                    assert.equal(res.status,200)
                    assert.isArray(res.body)
                    assert.equal(res.body.length,1)
                    assert.equal(res.body[0].name,"sarasa")
                    done();
                })
            })
        })
    })

    describe("GET /api/channel/:id",function(){
    })

    describe("PUT /api/channel/:id",function(){
    })

    describe("DELETE /api/channel/:id",function(){
    })

    describe("POST /api/channels",function() {

        var request =  function() {
            return chai.request(server).post('/api/channels').send({
                'name': "sarasa"
            })
        }

        it("should return 201 when channel is created",function(done){
            request().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when channel is created",function(done){
            request().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when channel is created",function(done){
            request().end(function(err,res){
                assert.equal(res.status,201)
                assert.property(res.body,'_id')
                done();
            })
        })
    })
})
