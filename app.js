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



var con = mysql.createConnection({
    host: "10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study"
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// creating server;
// http.createServer(function (req, res) {
//     fs.readFile('submit.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8060);

// response from the users;
app.get('/ez',function(req,res){
    console.log(req.query);

    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query("SELECT * FROM Jasonchallenge6", function (err, result, fields) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // });


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


