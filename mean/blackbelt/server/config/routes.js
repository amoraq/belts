// var loginController = require('../controllers/startingController.js');

console.log("routes");
// var path = require("path");
var loginController = require("./../controllers/loginRegs.js")
var appointmentsController = require("./../controllers/appointmentsController.js")

module.exports = function(app){
    app.get('/success', loginController.success);
    app.post('/reg', loginController.create);
    app.post('/login', loginController.login);
    //The following routes cause the app to crash and I don't know why
    // app.post('/newAppoint', appointmentsController.newAppoint);
    // app.delete('/deleteAppoint', appointmentsController.removeAppoint);
    // app.get('/showAppoint', appointmentsController.index);
};
