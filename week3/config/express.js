var indexController = require('../app/Controllers/index.controller');
var express = require('express');
var app = express();

// app.use('/', indexController.render)
app.use('/', indexController.render);
module.exports = app;