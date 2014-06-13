var formarble = require('../../');

var schema = require('./profile.schema.js');
var form = require('./profile.form.js');

var result = formarble.create(formarble.merge(schema, form));
formarble.ui(result);

console.log('window.schema =', JSON.stringify(result, null, '  '));