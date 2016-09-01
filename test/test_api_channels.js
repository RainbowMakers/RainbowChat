var server = require('../server').app
var Channel = require('../models/channel.js')
var TestHelper = require('./test_helper')
var mongo =require('mongodb')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("api/",function(){
    var createChannel =  function() {
        return chai.request(server).post('/api/channels').send({
            'name': "sarasa"
        })
    }
    var getChannels =  function() {
        return chai.request(server).get('/api/channels')
    }
    var getChannel =  function(id) {
        return chai.request(server).get('/api/channel/' + id)
    }

    beforeEach(function() {
        return assert.eventually.equal(Promise.resolve(TestHelper.dropDatabase()))
    });

    describe("GET /api/channels",function(){
        it("should return 200 with array of channels",function(done){
            createChannel().end(function(err,res){
                getChannels().end(function(err,res){
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
        var channel = new Channel({
            name: 'sarasa'
        }) 
        beforeEach(function(done){
            channel.save().then(function(doc){
                done();
            })
        })

        it('should read channel',function(done){ 
            Channel.all(function(err,docs){
                getChannel(mongo.ObjectId(docs[0]._id)).end(function(er,res){
                    assert.equal(res.body.name,'sarasa')
                    done();
                })
            })
        })
    })

    describe("PUT /api/channel/:id",function(){
    })

    describe("DELETE /api/channel/:id",function(){
    })

    describe("POST /api/channels",function() {

        it("should return 201 when channel is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when channel is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when channel is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                assert.property(res.body,'_id')
                done();
            })
        })
    })
})
