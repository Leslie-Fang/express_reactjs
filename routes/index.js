var express = require('express');
var router = express.Router();
var my=require('../databases/mysql_api');
var bcrypt = require('bcrypt');
var saltRounds = 10;

router.get('/',function(req,res){
    //res.render("login");
    res.send("main");
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
    console.log('save new user');
    console.log(req.param('username'));
    console.log(req.param('password'));
    var data = {username:req.param('username'),password:req.param('password')};
    my.saveuser(req,data,res,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        return res.send(queryData);
    });
});

module.exports = router;