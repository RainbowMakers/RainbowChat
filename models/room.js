'use strict'; 
var database = require('../database')
var getCollection = database.getCollection('rooms')

var Room = function(data) {
    this.name = data.name
    this._id = data._id
}

Room.prototype.save = function(){
    return new Promise((resolve,reject) => {
        getCollection.then((collection,err) => {
            if (err) reject(err)
            if(this._id){ //updated
                var doc = { "name":  this.name }
                collection.update({"_id": this._id},{"$set": {name: this.name} },function(){
                    resolve(doc)
                })
            } else { //insert
                var doc = { "name":  this.name }
                collection.insertOne(doc,{w: 1},function(){
                    resolve(doc)
                })
            }
        })
    })
}

Room.collection = getCollection

Room.all = function(callback){
    getCollection.then(function(collection){
        collection.find({}).toArray(function(err,docs) {
            callback(err,docs)
        })
    })
}

Room.count = function(callback){
    getCollection.then(function(collection){
        collection.count(function(err,result){
            if(err) throw err
            callback(result)
        })
    })
} 

Room.findOne = function(query,callback) { 
    getCollection.then(function(collection){
        collection.findOne(query,function(err,docs) {
            if(err) return callback(err)
            callback(null,docs);
        })
    })
}

module.exports = Room
