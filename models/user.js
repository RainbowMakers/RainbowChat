'use strict'; 
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/RainbowEcommerce';
var assert = require("assert")

var User = function(data) {
    this.name = data.name
    this.email = data.email
}

User.prototype.save = function(callback) {
    return MongoClient.connect(url, function(err, db) {
        if(err) return callback(err)
        var collection = db.collection('users')
        var doc = { "name":  this.name,
            "email": this.email
        }
        collection.insert(doc,function(){
            callback(null,doc)
        })
        db.close();
    }.bind(this));
}

User.findOne = function(query,callback) { 
    return MongoClient.connect(url, function(err, db) {
        if(err) return callback(err)
            var collection = db.collection('users')
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
                callback(null,docs);
            db.close();
        })
    });
}

module.exports = User;
