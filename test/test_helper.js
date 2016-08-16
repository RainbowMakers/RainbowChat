'use strict'; 
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/RainbowEcommerce';

var TestHelper = {}
TestHelper.dropDatabase = function() {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        db.dropDatabase()
        db.close();
    });
}

module.exports = TestHelper;
