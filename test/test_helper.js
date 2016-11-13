'use strict'; 
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var database = require('../database')
var url = 'mongodb://localhost:27017/RainbowChat_test';
var chai = require('chai')

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var assert = require('chai').assert;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var TestHelper = {}
TestHelper.dropDatabase = function(done) {
    database.drop().then(function(result){
        assert(result)
        if(typeof done == 'function') done()
    })
}

TestHelper.chai = chai


module.exports = TestHelper;
