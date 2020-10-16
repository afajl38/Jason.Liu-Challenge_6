var mysql = require('mysql');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var port = 8061;
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var con = mysql.createConnection({
    host: "10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study"
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// response from the users; --- already get;
app.get('/ez',function(req,res){
    console.log(req.query);






}




});

app.listen(8061);
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// });




// verify user data in database;
// if error???
// apply data back to client side;
// apply it in html file;
// if option - apply all s option;


