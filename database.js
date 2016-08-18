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

var connect = function(callback) {
    MongoClient.connect(mongoUrl(), function(err, database) {
        console.log("Connecting to mongodb ") + mongoUrl()
        if( err ) console.log(err);
        db = database;
        callback(err,database);
    })
}


module.exports = {
    mongo_vars: mongo_vars,
    connect: connect,
    url: mongoUrl
}
