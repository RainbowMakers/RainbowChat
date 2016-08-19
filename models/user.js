'use strict'; 
var database = require('../database')
var collection = database.collection('users')
var assert = require("assert")

var User = function(data) {
    this.name = data.name
    this.email = data.email
}

User.prototype.save = function(callback) {
    collection.then(function(collection){
        var doc = { "name":  this.name,
            "email": this.email
        }
        collection.insert(doc,function(){
            callback(null,doc)
        })
    }.bind(this))
}

User.findOne = function(query,callback) { 
    collection.then(function(collection){
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
            callback(null,docs);
        })
    })
}

module.exports = User;
