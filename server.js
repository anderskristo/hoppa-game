var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    next();
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(port);
console.log('Magic happends on port ' + port);