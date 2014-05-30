var formarble = require('../../index');
var schema = require('./contact.schema.js');

console.log('window.schema =', JSON.stringify(formarble.extend(schema), null, '  '));