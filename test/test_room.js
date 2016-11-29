'use strict'; 

var TestHelper = require('./test_helper')
var Room = require('../models/room')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("Room",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var room = new Room({
        name: 'sarasa'
    }) 

    it("#constructor",function(){ 
        assert.equal(room.name,"sarasa")
    })

    it("#save",function(){
        return assert.eventually.ok(room.save())
    })
    context('destroy room',function() {
        beforeEach(function(){
            return assert.eventually.ok(room.save())
        })

        it("channel#remove",function(done){
            Room.findOne({"name":"sarasa"}, function(err,doc){
                room = new Room(doc)
                room.remove()
                Room.count(function(result){
                    assert.equal(result,0)
                    done()
                })
            })
        })

    })

    context('exists documents',function(){
        var room = new Room({
            name: 'sarasa'
        }) 
        beforeEach(function(){
            return assert.eventually.ok(room.save())
        })

        it("Room.find",function(done){
            Room.findOne({"name":"sarasa"}, function(err,doc){
                assert.equal(doc.name,"sarasa");
                done();
            })
        })

        it("Room.all",function(done){
            Room.all(function(err,docs){
                assert.equal(docs[0].name,"sarasa")
                done();
            })
        })

        it("collection/count",function(done){
            Room.count(function(result){
                assert.equal(result,1)
                done()
            })
        })
    })
})
