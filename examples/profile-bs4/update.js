var formarble = require('../..');

var exportType = require('./types.profile.js');

var result = formarble.create(formarble.merge(exportType.schema, exportType.form));
formarble.ui(result);

//console.log('window.schema =', JSON.stringify(result, null, '  '));
console.log('window.schema =', JSON.stringify(result));
