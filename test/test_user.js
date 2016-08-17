'use strict'; 

var TestHelper = require('./test_helper')
var User = require('../models/user')
var assert = require('chai').assert;


describe("User",function() {
    beforeEach(function() {
        TestHelper.dropDatabase()
    });

    var user = new User({ name: "prueba",
                        email: "example@example.com" })

    it("#initialize",function(){ 
        assert.equal(user.name,"prueba")
        assert.equal(user.email,"example@example.com")
    })

    it("#save",function(done){
        user.save(done)
    })

    it("User.findOne",function(done){
        user.save(done)
        User.findOne({"email":"example@example.com"}, done)
    })
})
