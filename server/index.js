"use strict";
var express = require('express');
var dbModule_1 = require('./dbModule');
var app = express();
var userTable = {
    'brij': 'abc123',
    'ashish': 'xyz123'
};
app.options('/api/login', function (req, res) {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type, x-auth'
    }).send();
});
app.get('/api/login', function (req, res) {
    var auth = req.headers['x-auth'];
    res = res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type'
    });
    if (auth) {
        var credential = auth.split(':');
        var pwd = userTable[credential[0]];
        dbModule_1.SaveDB(credential[0], credential[1]);
        res.status(401);
        if (pwd == undefined) {
            res.send('User not available');
        }
        else if (credential[1] == '') {
            res.send('Password Missing');
        }
        else if (pwd == credential[1]) {
            res.status(200).send('OK');
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
