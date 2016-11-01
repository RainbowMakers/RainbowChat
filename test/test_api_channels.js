var server = require('../server').app
var Channel = require('../models/room.js')
var TestHelper = require('./test_helper')
var mongo =require('mongodb')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("api/",function(){
    var createChannel =  function() {
        return chai.request(server).post('/api/rooms').send({
            'name': "sarasa"
        })
    }
    var getRooms =  function() {
        return chai.request(server).get('/api/rooms')
    }
    var getChannel =  function(id) {
        return chai.request(server).get('/api/room/' + id)
    }

    beforeEach(function() {
        return assert.eventually.equal(Promise.resolve(TestHelper.dropDatabase()))
    });

    describe("GET /api/rooms",function(){
        it("should return 200 with array of rooms",function(done){
            createChannel().end(function(err,res){
                getRooms().end(function(err,res){
                    assert.equal(res.status,200)
                    assert.isArray(res.body)
                    assert.equal(res.body.length,1)
                    assert.equal(res.body[0].name,"sarasa")
                    done();
                })
            })
        })
    })

    describe("GET /api/room/:id",function(){
        var room = new Channel({
            name: 'sarasa'
        }) 
        beforeEach(function(done){
            room.save(function(err,doc){
                done();
            })
        })

        it('should read room',function(done){ 
            Channel.all(function(err,docs){
                getChannel(mongo.ObjectId(docs[0]._id)).end(function(er,res){
                    assert.equal(res.body.name,'sarasa')
                    done();
                })
            })
        })
    })

    describe("PUT /api/room/:id",function(){
    })

    describe("DELETE /api/room/:id",function(){
    })

    describe("POST /api/rooms",function() {

        it("should return 201 when room is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when room is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                done();
            })
        })

        it("should return document when room is created",function(done){
            createChannel().end(function(err,res){
                assert.equal(res.status,201)
                assert.property(res.body,'_id')
                done();
            })
        })
    })
})
