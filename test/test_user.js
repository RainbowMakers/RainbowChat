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

    it("#save",function(){
        assert(user.save())
    })

    it("User.findOne",function(){
        user.save()
        User.findOne({"email":"example@example.com"},function(doc){
            assert.equal(doc.email,"example@example.com")
        })
    })
})
