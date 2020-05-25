'use strict'

module.exports = function(app){
    var cons = require('./controller');
    app.route('/').get(cons.index);
    app.route('/persons').get(cons.persons);
    app.route('/persons/:person_id').get(cons.findPerson);
    app.route('/persons').post(cons.createPerson);
    app.route('/persons').put(cons.updatePerson);
    app.route('/persons') .delete(cons.deletePerson);

}