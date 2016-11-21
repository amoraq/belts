console.log("appointments model");

var mongoose = require("mongoose");

var appSchema = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    complaint: {
        type: String,
        required: true,
        minlength: 10
    }
}, {timestamps: true});

mongoose.model("appDB", appSchema);
