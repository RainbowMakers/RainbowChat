'use strict'; 
var database = require('../database')
var getCollection = database.getCollection('chats')

var Chat = function(data) {
    this.channel = data.channel
}

Chat.prototype.save = function(callback) {
    getCollection.then(function(collection){
        var doc = { "channel":  this.channel }
        collection.insert(doc,function(){
            callback(null,doc)
        })
    }.bind(this))
}


Chat.findOne = function(query,callback) { 
    getCollection.then(function(collection){
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
            callback(null,docs);
        })
    })
}

module.exports = Chat
