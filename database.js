var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/RainbowEcommerce'
var db;

var connect = function(callback) {
    MongoClient.connect(url, function(err, database) {
        console.log("Connecting to mongodb ") + url
        if( err ) throw err;
        db = database;
        callback(err,database);
    })
}


module.exports = {
    connect: connect
}
