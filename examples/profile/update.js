var _ = require('lodash');
var _ = require('lodash');

var formarble = require('../..');

function objSet(obj, path, value) {
    var segments = path.split('.'),
        cursor = obj,
        segment,
        len = segments.length - 1,
        i;

    for (i = 0; i < len; i++) {
        segment = segments[i];
        cursor = cursor[segment] || (cursor[segment] = {});
    }

    return cursor[segments[i]] = value;
}

function objGet(obj, path) {
    var segments = path.split('.'),
        cursor = obj,
        len = segments.length,
        i;

    for (i = 0; i < len; i++) {
        cursor = cursor[segments[i]];

        if (undefined === cursor) {
            return;
        }
    }

    return cursor;
}

function schemaSet(obj, path, value) {
    var path = 'properties.' + path.split('.').join('.properties.');
    return objSet(obj, path, value);
}

function schemaGet(obj, path) {
    var path = 'properties.' + path.split('.').join('.properties.');
    return objGet(obj, path);
}

var form = require('./profile.form.js');
var schema = require('./profile.schema.js');
var extended = formarble.extend(schema, form);


var image = schemaGet(extended, 'image');
var spin = schemaGet(extended, 'spin');

var result = {
    title: 'Profile',
    display: {name: 'tree' }
};


schemaSet(result, 'image', {
    title: 'Image Settings',
    display: 'group'
});
schemaSet(result, 'spin', {
    title: 'Image Settings',
    display: 'group'
});

_.each(image.properties, function(prop, name) {
    if(prop.properties) {
        schemaSet(result, ['image', name].join('.'), prop)
    } else {
        if(!schemaGet(result, 'image.general')) {
            schemaSet(result, 'image.general', {
                title: 'Image general settings',
                display: 'group',
                order: 1
            })
        }
        schemaSet(result, ['image.general', name].join('.'), prop)
    }
});

_.each(spin.properties, function(prop, name) {
    if(prop.properties) {
        schemaSet(result, ['spin', name].join('.'), prop)
    } else {
        if(!schemaGet(result, 'spin.general')) {
            schemaSet(result, 'spin.general', {
                title: 'Spin general settings',
                display: 'group',
                order: 1
            })
        }
        schemaSet(result, ['spin.general', name].join('.'), prop)
    }
});

console.log('window.schema =', JSON.stringify(result, null, '  '));