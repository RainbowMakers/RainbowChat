'use strict'; 

var MongoClient = require('mongodb').MongoClient
var url = require('url')

var db;

var mongo_vars = {
    database: ("RainbowEcommerce" + '_' + process.env.NODE_ENV),
    host: (process.env.MONGO_HOST || "localhost:27017")
}

var mongoUrl = function() {
    return 'mongodb://' + mongo_vars.host + '/' + mongo_vars.database
}

var connect = new Promise(
    function (resolve, reject) {
        MongoClient.connect(mongoUrl(), function(err, database) {
            console.log("Connecting to mongodb ") + mongoUrl()
            if(err) reject(err);
            resolve(database);
        })
    }
);

var collection = function(coll) {
    return new Promise(function(resolve,reject){
        connect.then(function(db){
            resolve(db.collection(coll))
        })
    })
}

module.exports = {
    mongo_vars: mongo_vars,
    connect: connect,
    collection: collection,
    url: mongoUrl
}
