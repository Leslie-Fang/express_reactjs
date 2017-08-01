var mysql = require('mysql');
var config = require('../config.js').databases_config;
var bcrypt = require('bcrypt');
var saltRounds = 10;

exports.validateifUserExist=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('select * from user where username = ?',data.username, function(err, result) {
        if (err) throw err;
        if(result.length === 0) {
            //console.log(result);
            callback({state:'nouser'});
        }
        else{
            callback({state:'userExsit'});
        }
    });
    connection.end();
};

exports.checkpassword=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('select * from user where username = ?',data.username, function(err, result,fields) {
        if (err) throw err;
        console.log("HHH");
        if(result.length === 0) {
            //console.log(result);
            callback({state:'nouser'});
        }
        else{
            //hash value find in the databases is result.password
            console.log(data.password);
            console.log(result[0].password);
            bcrypt.compare(data.password, result[0].password, function(err, compareResult) {
                // res == true
                console.log('compareResult');
                console.log(compareResult);
                //now has some problem with the res, which always return false
                if(result[0].password)
                if(compareResult == true){
                    /*
                    //if use the cookies to control the user login status
                    res.cookie('user', data, {maxAge: 60*60*1000});
                    res.cookie('islogin', 1, {maxAge: 60*60*1000});*/

                    //use session in the memory
                    req.session.user = data.username;
                    req.session.islogin = 1;

                    callback({state:'ok',user:data.username});
                }else{
                    callback({state:'nopassword'});
                }
            });
        }
    });
    connection.end();
};

exports.saveuser=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('insert into user (username, password) values(?,?)',[data.username,data.password], function(err, result) {

        if (err) throw err;
        callback({state:'ok'});
/*        if(result.length === 0) {
            //console.log(result);
            callback({state:'nopassword'});
        }
        else{
            //console.log(result);
            res.cookie('user', data, {maxAge: 60*60*1000});
            res.cookie('islogin', 1, {maxAge: 60*60*1000});
            callback({state:'ok'});
        }*/
    });
    connection.end();
};