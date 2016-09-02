'use strict'; 
var getCollection = require('../database').getCollection('channels')

var Channel = function(data) {
    this.name = data.name
}

Channel.prototype.save = function(){
    return new Promise(function(resolve,reject){
        getCollection.then(function(collection){
            var doc = { "name":  this.name }
            collection.insertOne(doc,function(err,cursor){
                this._id = cursor.insertedId
                resolve(this)
            }.bind(this))
        }.bind(this))
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
