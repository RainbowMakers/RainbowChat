'use strict'; 

var TestHelper = require('./test_helper')
var Chat = require('../models/chat')
var chai = TestHelper.chai
var assert = TestHelper.chai.assert


describe("Chat",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var chat = new Chat({
        channel: 'sarasa'
    }) 

    it("#constructor",function(){ 
        assert.equal(chat.channel,"sarasa")
    })

    it("#save",function(done){
        chat.save(function(err,doc){
            assert.equal(doc.channel,"sarasa");
            assert.equal(doc._id._bsontype,"ObjectID");
            done();
        })
    })

    it("Chat.find",function(done){
        chat.save(function(){
            Chat.findOne({"channel":"sarasa"}, function(err,doc){
                assert.equal(doc.channel,"sarasa");
                done();
            })
        })
    })

    it("collection/count",function(done){
        chat.save(function(){
            Chat.count(function(result){
                assert.equal(result,1)
                done()
            })
        })
    })
})
