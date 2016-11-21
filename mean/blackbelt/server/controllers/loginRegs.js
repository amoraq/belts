console.log("loginRegs controller");

var mongoose = require("mongoose");

var LoginReg = mongoose.model('LoginReg')
var bcrypt = require('bcryptjs');

module.exports = {
    create: function(req, res){
        var user = new LoginReg(req.body);
        user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
        console.log(user);
        user.save(function(err)
        {
            if(err){console.log('Save unsuccesful' + err)
        } else{res.json(user)}
    })},
    login: function(req, res){
        res.json(result);
    }
}


// function FreindsController() {
//     this.index = function(req, res){
//         Friend.find({}, function(err, results){
//             res.json(results);
//         });
//     };
//
//     this.create = function(req, res){
//         Freind.create(req.body, function(err, result){
//             if (err){
//                 console.log(err);
//             }
//             else {
//                 res.json(result);
//             }
//         });
//     };
//
//     this.update = function(req, res){
//         Freind.findOne({_id: req.params.id}, function(err, freind){
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 friend.name = req.body.name;
//                 friend.favoriteLanguage = req.body.favoriteLanguage;
//                 friend.save(function(err, updateFriend){
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         res.json(updateFriend);
//                     }
//                 });
//             }
//         });
//     };
//
//     this.delete = function(req, res){
//         Friend.remove({_id: req.params.id}, function(err){
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 res.json({message: "Friend deleted"});
//             }
//         });
//     };
//
//     this.show = function(req, res){
//         Freind.findOne({_id: req.params.id}, function(err, result){
//             res.json(result);
//         });
//     };
// };
//
// module.exports = new FreindsController();
