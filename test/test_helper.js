'use strict'; 
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/RainbowEcommerce';

var TestHelper = {}
TestHelper.dropDatabase = function(done) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        db.dropDatabase()
        db.close();
        done()
    });
}

module.exports = TestHelper;
