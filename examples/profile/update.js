var _ = require('lodash');
var formarble = require('../../');

var srcSchema = require('./image.schema.js');
var srcSchemaExtension = require('./image.form.js');

var result = formarble.create(_.merge(_.cloneDeep(srcSchema), srcSchemaExtension));
formarble.ui(result);

console.log('window.schema =', JSON.stringify(result, null, '  '));