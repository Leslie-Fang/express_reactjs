var express = require('express');
var conf = require('./config.js');
var routes = require('./routes');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var redis   = require("redis");
var client  = redis.createClient();
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var app = express();
var sessionOptions={
    secret: 'leslie playground',
    cookie: ('name', 'value', { path: '/', httpOnly: true,secure: false, maxAge:  60000 }),//cookie's session id's set
    resave: true,
    saveUninitialized: true,
    store:new redisStore({
        host:'localhost',
        port:'6379',
        client: client,
        ttl: 1800 //expire time to delete the session data store in the redis
    })  //without define of the store of redis instance, would use the memory as default
}

//set the route of the views
app.set('views','./views');
//app.set('view engine', 'jade');
//use html instead of jade template
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(session(sessionOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',routes);
//static files's routes
app.use(express.static('public'));

app.listen(conf.port, function () {
    console.log('Example app listening on port '+conf.port+'!');
});