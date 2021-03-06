var express = require('express');
var bodyParser = require('body-parser');
var pjsonLoader = require('./src/pjson-loader');
var http = require('http');
var fs = require('fs');
var path = require('path');
var testJSON = require('./tests.json');

var app = express();

app.use(bodyParser.json());

pjsonLoader.load(app, {
});

var server = http.createServer(app);
server.listen('9090');

module.exports = app;
