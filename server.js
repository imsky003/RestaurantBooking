var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send('hello class');
});
app.listen(4000);
module.exports = app;