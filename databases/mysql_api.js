var mysql = require('mysql');
var config = require('../config.js').databases_config;

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
    connection.query('select * from user where username = ? AND password = ?',[data.username,data.password], function(err, result) {
        if (err) throw err;
        if(result.length === 0) {
            //console.log(result);
            callback({state:'nopassword'});
        }
        else{
            //console.log(result);
            res.cookie('user', data, {maxAge: 60*60*1000});
            res.cookie('islogin', 1, {maxAge: 60*60*1000});
            callback({state:'ok'});
        }
    });
    connection.end();
};