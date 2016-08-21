'use strict'; 
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var database = require('../database')
var url = 'mongodb://localhost:27017/RainbowChat_test';

var TestHelper = {}
TestHelper.dropDatabase = function(done) {
    database.drop().then(function(result){
        assert(result)
        done()
    })
}

module.exports = TestHelper;
