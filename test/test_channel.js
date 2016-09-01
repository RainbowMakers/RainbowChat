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

    it("#save should assign name",function(){
        return assert.eventually.propertyVal(channel.save(),"name","sarasa")
    })

    it("#save should assign object id",function(){
        return assert.eventually.deepPropertyVal(channel.save(),"_id._bsontype","ObjectID")
    })

    context('exists documents',function(){
        beforeEach(function(done){
            channel.save().then(function(){
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
