var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

var modelsPath = path.join(__dirname, '../models');
var reg = new RegExp(".js$", "i");
var db = 'mongodb://localhost/blackbelt'

mongoose.connect(db);

mongoose.connection.on('connection', function(){
    console.log("Mongoose default connection is open to ${ db }");
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection error ${ err }");
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection disconnected");
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose connection closed through app termination");
        process.exit(0);
    });
});

fs.readdirSync(modelsPath).forEach(function(file){
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
});
