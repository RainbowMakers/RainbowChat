'use strict'; 

var TestHelper = require('./test_helper')
var Channel = require('../models/room')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("Channel",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var room = new Channel({
        name: 'sarasa'
    }) 

    it("#constructor",function(){ 
        assert.equal(room.name,"sarasa")
    })

    it("#save",function(done){
        room.save(function(err,doc){
            assert.equal(doc.name,"sarasa");
            assert.equal(doc._id._bsontype,"ObjectID");
            done();
        })
    })

    context('exists documents',function(){
        beforeEach(function(done){
            room.save(function(){
                done();
            })
        })

        it("Channel.find",function(done){
            Channel.findOne({"name":"sarasa"}, function(err,doc){
                assert.equal(doc.name,"sarasa");
                done();
            })
        })

        it("Channel.all",function(done){
            Channel.all(function(err,docs){
                assert.equal(docs[0].name,"sarasa")
                done();
            })
        })

        it("collection/count",function(done){
            Channel.count(function(result){
                assert.equal(result,1)
                done()
            })
        })
    })
})
