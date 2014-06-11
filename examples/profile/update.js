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
    display: { name: 'tree' }
};


schemaSet(result, 'image', {
    title: 'Image Settings',
    display: {
        name: 'group'
    },
    showInTree: true
});
schemaSet(result, 'image.general', {
    title: 'General settings',
    display: 'group',
    showInTree: true,
    order: 1
})

schemaSet(result, 'spin', {
    title: 'Spin Settings',
    display: {
        name: 'group'
    },
    showInTree: true
});
schemaSet(result, 'spin.general', {
    title: 'General settings',
    display: 'group',
    showInTree: true,
    order: 1
})

_.each(image.properties, function(prop, name) {
    if(prop.properties) {
        schemaSet(result, ['image', name].join('.'), _.cloneDeep(prop));
    } else {
        schemaSet(result, ['image.general', name].join('.'), _.cloneDeep(prop))
    }
});

_.each(spin.properties, function(prop, name) {
    if(prop.properties) {
        schemaSet(result, ['spin', name].join('.'), _.cloneDeep(prop))
    } else {
        schemaSet(result, ['spin.general', name].join('.'), _.cloneDeep(prop))
    }
});


_.each(['spin.images', 'spin.images.fullscreen', 'spin.images.main', 'spin.images.zoom'], function(path){
    var schema = schemaGet(result, path);
    _.each(schema.properties, function(prop, name){
        prop.showInTree = true;

    });
})
_.each(['spin.images'], function(path){
    var schema = schemaGet(result, path);
    schema.noGeneralOptions = true;
})

formarble.ui(result);

console.log('window.schema =', JSON.stringify(result, null, '  '));