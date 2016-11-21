console.log("appointmentsController");

var mongoose = require('mongoose');

var appDB = mongoose.model('appDB');

function AppointmentsController(){
    this.index = function(req, callback){
        appDB.find({}, function(err, results){
            callback(results);
        });
    };

    this.newAppoint = function(req, callback){
        appDB.save(function(error, result){
            callback(result);
        });
    };

    this.removeAppoint = function(callback, data){
        appDB.remove(function(error, result){
            callback(result);
        });
    };
};
