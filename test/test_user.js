'use strict'; 

var TestHelper = require('./test_helper')
var User = require('../models/user')
var expect = require('chai').expect;


describe("User",function() {
    beforeEach(function() {
        TestHelper.dropDatabase()
    });
    var user = new User({ name: "prueba",
                        email: "example@example.com" })
    it(".initialize",function(){ 
        expect(user.name).to.equal("prueba")
        expect(user.email).to.equal("example@example.com")
    })

    it(".save",function(){
        expect(user.save()).to.equal(true)
    })

    it("User.findOne",function(){
        user.save()
        User.findOne({"email":"example@example.com"},function(doc){
            expect(doc.email).to.equal("example@example.com")
        })
    })
})
