'use strict'; 
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/RainbowEcommerce';
var assert = require("assert")

var User = function(data) {
    this.name = data.name
    this.email = data.email
}

User.prototype.save = function() {
    var self = this;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var collection = db.collection('users')
        collection.insert({ "name":  self.name,
                          "email": self.email
        })
        db.close();
    });
    return true;
}

User.findOne = function(query,callback) { 
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var collection = db.collection('users')
        collection.findOne(query,function(err,doc) {
            assert.equal(null, err);
            callback(doc);
            db.close();
        })
    });
}

module.exports = User;
