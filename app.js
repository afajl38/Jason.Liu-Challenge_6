var mysql = require('mysql');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );





var con = mysql.createConnection({
    host: "10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study"
});

app.get(function(req,res){





});


http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8060);

