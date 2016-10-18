"use strict";
var express = require('express');
var app = express();
var userTable = {
    'brij': 'abc123',
    'ashish': 'xyz123'
};
// app.options('/api/login', (req, res) => {
// res.header({
//   'Access-Control-Allow-Origin': '*'
// });
// res.send();
// });
app.get('/api/login', function (req, res) {
    var auth = req.headers['x-auth'];
    if (auth) {
        var credential = auth.split(':');
        var pwd = userTable[credential[0]];
        if (pwd == undefined) {
            res.send('User not available');
        }
        else if (credential[1] == '') {
            res.send('Password Missing');
        }
        else if (pwd == credential[1]) {
            res.send('Authentiated');
        }
        else {
            res.send('Authentication Fail');
        }
    }
    else {
        res.status(401).send('Error');
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});