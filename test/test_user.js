'use strict'; 

var TestHelper = require('./test_helper')
var User = require('../models/user')
var assert = require('chai').assert;


describe("User",function() {
    beforeEach(function(done) {
        TestHelper.dropDatabase(done)
    });

    var user = new User({ name: "prueba",
                        email: "example@example.com" })

    it("#initialize",function(){ 
        assert.equal(user.name,"prueba")
        assert.equal(user.email,"example@example.com")
    })

    it("#save",function(done){
        user.save(function(err,doc){
            assert.equal(doc.name,"prueba");
            assert.equal(doc.email,"example@example.com");
            assert.equal(doc._id._bsontype,"ObjectID");
            done();
        })
    })

    it("User.find",function(done){
        user.save(function(){
            User.findOne({"email":"example@example.com"}, function(err,doc){
                assert.equal(doc.name,"prueba");
                assert.equal(doc.email,"example@example.com");
                done();
            })
        })
    })
})
