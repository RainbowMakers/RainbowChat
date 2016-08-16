'use strict'; 

var assert = require('assert')
var TestHelper = require('./test_helper')
var User = require('../models/user')


var u = new User({ name: "prueba",email: "example@example.com" })

TestHelper.dropDatabase()

assert.equal(u.name,"prueba")
assert.equal(u.email,"example@example.com")
assert.equal(u.save(),true)

User.findOne({"email": "example@example.com"},function(doc) {
    assert.equal(doc.email,"example@example.com")
})
