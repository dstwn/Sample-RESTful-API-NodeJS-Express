 var mysql = require('mysql');
 var con = mysql.createConnection(
     {
         host : "localhost",
         user : "root",
         password : "-3Llysa8",
         database : "crud_db"
     }
 );
 con.connect(function (err) {
    if(err) throw err;
 });

 module.exports = con;