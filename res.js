'use strict'

exports.ok = function(values, message, res){
    var data = {
        'status': 200,
        'message' : message,
        'data' : values
    };
    res.json(data);
    res.end();
}