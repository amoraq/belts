console.log("loginReg");

var mongoose = require("mongoose");

var loginRegSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "this is for something else"],
        trim: true},
    email: {
        type: String,
        required: [true, "email required"]},
    password: {
        type: String,
        minlength: 8,
        maxlength: 255,
        validate:{
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        },
        required: [true, "password required"]}
}, {timestamps: true});


mongoose.model('LoginReg', loginRegSchema);
