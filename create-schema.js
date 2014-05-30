var formarble = require('./index.js');

if(process.argv.length <= 2) {
    console.log("Usage: node create-schema.js ./src-schema.js ./extend-schema.js")
    process.exit();
}

var schemaPath = process.argv[2];
var extendPath = process.argv[3];


var srcSchema = require(schemaPath),
    extendSchema;

if(extendPath){
    extendSchema = require(extendPath);
}

var resultSchema = formarble.extend(srcSchema, extendSchema);

console.log('window.schema =', JSON.stringify(resultSchema, null, '  '));


