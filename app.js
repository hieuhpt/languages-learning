var express = require('express');
var mongoService = require('./mongo.service');
var bodyParser = require('body-parser');
var router = require('./http/router');
var path = require('path');
var nunjucks = require('express-nunjucks');

var app = express();

app.use(express.static(__dirname));
app.use(mongoService);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
nunjucks.setup({
    autoescape: true,
    watch: true
}, app);

app.use(router);

console.log('3000');
app.listen(3000);