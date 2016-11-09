"use strict";
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/school');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
var userInfo = new mongoose.Schema({
    UserName: String,
    Password: String
});
var user = mongoose.model('Person', userInfo);
function SaveDB(name, password) {
    var user1 = new user({ UserName: name, Password: password });
    user1.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('User Saved');
        }
    });
}
exports.SaveDB = SaveDB;
