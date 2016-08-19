'use strict'; 
var database = require('../database')
var getCollection = database.getCollection('users')

var User = function(data) {
    this.name = data.name
    this.email = data.email
}

User.prototype.save = function(callback) {
    getCollection.then(function(collection){
        var doc = { "name":  this.name,
            "email": this.email
        }
        collection.insert(doc,function(){
            callback(null,doc)
        })
    }.bind(this))
}

User.findOne = function(query,callback) { 
    getCollection.then(function(collection){
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
            callback(null,docs);
        })
    })
}

module.exports = User;
