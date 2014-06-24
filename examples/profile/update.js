var formarble = require('../..');

var schema = require('./image.schema.js');
var form = require('./types.image.js');

var result = formarble.create(formarble.merge(schema, form));
formarble.ui(result);

console.log('window.schema =', JSON.stringify(result, null, '  '));