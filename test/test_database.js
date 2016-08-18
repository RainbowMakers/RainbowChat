'use strict'; 

var assert = require('chai').assert;
var database = require('../database')
var url = require('url')


describe("database",function(){
    describe("database.url",function(){
        it("Mongo host should be ENV:MONGO_HOST",function(){
            assert.equal((process.env.MONGO_HOST || 'localhost:27017'),url.parse(database.url()).host)
        })
        it("database should be RainbowEcommerce with ENV:MONGO_HOST",function(){
            assert.equal(("/RainbowEcommerce_test"),url.parse(database.url()).path)
        })
    })
})
