'use strict'; 
var database = require('../database')
var getCollection = database.getCollection('channels')

var Channel = function(data) {
    this.name = data.name
}

Channel.prototype.save = function(callback) {
    getCollection.then(function(collection){
        var doc = { "name":  this.name }
        collection.insertOne(doc,{w: 1},function(){
            console.log('savedd ' + doc._id)
            callback(null,doc)
        })
    }.bind(this))
}

Channel.collection = getCollection

Channel.all = function(callback){
    getCollection.then(function(collection){
        collection.find({}).toArray(function(err,docs) {
            callback(err,docs)
        })
    })
}

Channel.count = function(callback){
    getCollection.then(function(collection){
        collection.count(function(err,result){
            if(err) throw err
            callback(result)
        })
    })
} 

Channel.findOne = function(query,callback) { 
    getCollection.then(function(collection){
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
            callback(null,docs);
        })
    })
}

module.exports = Channel
