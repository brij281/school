import * as mongoose from "mongoose";

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

var user = mongoose.model('User', userInfo);

export function SaveDB(name: String, password: String) {
    var user1 = new user({ UserName: name, Password: password });
    user1.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('User Saved');
        }
    })
};

export function GetData(name: String, callback: (pwd: string) => void) {
    user.findOne({ UserName: name },
        (err, usr: any) => {
            if (err) {
                console.log(err)
            }
            if (usr) {
                console.log(usr)
                callback(usr.Password);
            } else {
                console.log("No user found")
            }
        })
};


