var express = require('express');
var router = express.Router();
var my=require('../databases/mysql_api');
var bcrypt = require('bcrypt');
var redis   = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var saltRounds = 10;

/*
//if use the cookies to control the user login status
router.use('/main',function(req,res,next){
    if(req.cookies.islogin == 1){
        next();
    }
    else{
        console.log('Not login!');
        console.log(req.cookies.islogin);
        res.redirect('/login');
    }
});*/

//use session in the memory
router.use('/myCenter',function(req,res,next){
    console.log(req.session);
    if(req.session.islogin == 1){
        next();
    }
    else{
        console.log('Not login!');
        console.log(req.session.islogin);
        res.redirect('/login');
    }
});

router.get('/',function(req,res){
    //res.render("login");
    res.render("main");
});

router.get('/myCenter',function(req,res){
    //res.render("login");
    res.send("This is my personal center page.");
});

router.get('/login',function(req,res){
    res.render("login");
});

router.get('/signup',function(req,res){
    res.render("signup");
});

router.post('/login', function(req, res, next) {
    console.log(req.param('username'));
    console.log(req.param('password'));
    var data = {username:req.param('username'),password:req.param('password')};
    console.log(data);
    my.validateifUserExist(req,data,res,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        if(queryData.state == 'nouser')
        {
            return res.send(queryData);
        }else{
            next();
        }
    });
},function(req, res){
    console.log('checkout password!');
    console.log(req.param('username'));
    console.log(req.param('password'));
    var data = {username:req.param('username'),password:req.param('password')};
    my.checkpassword(req,data,res,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        return res.send(queryData);
    });
});

router.post('/signup', function(req, res, next) {
    console.log(req.param('username'));
    console.log(req.param('password'));
    var data = {username:req.param('username'),password:req.param('password')};
    console.log(data);
    my.validateifUserExist(req,data,res,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        if(queryData.state == 'nouser')
        {
            //user not exist, we could save the new user into the databases
            next();
            //return res.send(queryData);
        }else{
            return res.send(queryData);
        }
    });
},function(req, res){
    bcrypt.hash(req.param('password'), saltRounds, function(err, hash) {
        console.log('save new user');
        console.log(req.param('username'));
        console.log(req.param('password'));
        console.log(hash);
        var data = {username:req.param('username'),password:hash};
        my.saveuser(req,data,res,function(queryData){
            console.log(queryData);
            console.log('In callback!');
            //didn't find the user return novoter
            return res.send(queryData);
        });
    });
});

router.post('/logout', function(req, res, next) {
    res.clearCookie("username");
    req.session.destroy(function(err) {
        // session updated
        return res.send({state:'confirm_logout'});
    });

});

module.exports = router;