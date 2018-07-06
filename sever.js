var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/vue/dist'));

var options = {
    key:  fs.readFileSync('keys/uuabc_com.key'),
    cert: fs.readFileSync('keys/uuabc_com.crt'),
    passphrase: 'passphase4privkey'
};
http.createServer(app).listen(3000);
// https.createServer(options, app).listen(443);
console.log('Server start success');