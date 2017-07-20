var express = require('express');
var router = express.Router();
var my=require('../databases/mysql_api');

router.get('/',function(req,res){
    //res.render("login");
    res.send("main");
});

router.get('/login',function(req,res){
    res.render("login");
    //res.send("hello world");
});

router.get('/signup',function(req,res){
    //res.render("login");
    res.send("need to sign up");
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

module.exports = router;