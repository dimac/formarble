var formarble = require('../..');
var _ = require('lodash');

var form = require('./profile.form.js');
var schema = require('./profile.schema.js');
var result = formarble.extend(schema, form);

result.properties.spin.display = {name: 'group:tab'};
result.properties.spin.properties = {
    general: {
        title: 'General',
        display: 'group',
        path: 'spin.general',
        order: 0,
        properties: _.omit(result.properties.spin.properties, 'images')
    },
    main: result.properties.spin.properties.images.properties.main,
    zoom: result.properties.spin.properties.images.properties.zoom,
    fullscreen: result.properties.spin.properties.images.properties.fullscreen
}

//console.log(util.inspect(result, {depth: 10}));
console.log('window.schema =', JSON.stringify(result, null, '  '));