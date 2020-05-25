'use strict';
var response  = require('./res');
var connection = require('./conn');
//show all persons
exports.persons = function(req,res){
    connection.query('SELECT * FROM person', function (error, rows, fields){
        if(error){
            console.log(error)
        } else {
            response.ok(rows,"Data persons",res)
        }
    });
};
//find person
exports.findPerson = function(req, res){
    var person_id = req.params.person_id;
    connection.query('SELECT * FROM person WHERE id = ?',[ person_id],
        function (error, rows, fields){
            if(error){
                console.log(error)
            }else {
                response.ok(rows,"Data ditemukan",res)
            }
        }        
    );
}
//create person

exports.createPerson= function(req,res){
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    connection.query('INSERT INTO person (first_name,last_name) VALUES (?,?)',
        [first_name,last_name],
        function (error, rows, fields){
            if(error){
                console.log(error)
            }else {
                response.ok(rows, "Berhasil tambah Person!", res)
            }
        }
    );
}
exports.updatePerson = function(req, res) {
    
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows,"Berhasil merubah user!", res)
        }
    });
};

exports.deletePerson = function(req, res) {
    
    var user_id = req.body.user_id;

    connection.query('DELETE FROM person WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows,"Berhasil menghapus user!", res)
        }
    });
};
exports.index = function(req, res) {
    response.ok(rows,"Hello word", res)
};

