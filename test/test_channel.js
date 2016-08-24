'use strict'; 

var TestHelper = require('./test_helper')
var Channel = require('../models/channel')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("Channel",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var channel = new Channel({
        name: 'sarasa'
    }) 

    it("#constructor",function(){ 
        assert.equal(channel.name,"sarasa")
    })

    it("#save",function(done){
        channel.save(function(err,doc){
            assert.equal(doc.name,"sarasa");
            assert.equal(doc._id._bsontype,"ObjectID");
            done();
        })
    })

    it("Channel.find",function(done){
        channel.save(function(){
            Channel.findOne({"name":"sarasa"}, function(err,doc){
                assert.equal(doc.name,"sarasa");
                done();
            })
        })
    })

    it("Channel.all",function(done){
        channel.save(function(){
            Channel.all(function(err,docs){
                assert.equal(docs[0].name,"sarasa")
                done();
            })
        })
    })

    it("collection/count",function(done){
        channel.save(function(){
            Channel.count(function(result){
                assert.equal(result,1)
                done()
            })
        })
    })
})
