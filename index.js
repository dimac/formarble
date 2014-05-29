"use strict";

var util = require('util');
var _ = require('lodash');

function isDefined(value) {
    return undefined !== value;
}

function isObjectNotArray(value) {
    return _.isObject(value) && !_.isArray(value);
}

function resolveDisplayByType(schema) {
    var input;

    if ('boolean' === schema.type) {
        return { name: 'input', type: 'checkbox' };
    }

    if ('number' === schema.type || 'integer' === schema.type) {
        input = { name: 'input', type: 'number' };

        if (isDefined(schema.maximum)) {
            input.max = schema.maximum;
        }
        if (isDefined(schema.minimum)) {
            input.min = schema.minimum;
        }
        if (isDefined(schema.exclusiveMaximum)) {
            input.max = schema.exclusiveMaximum - 1;
        }
        if (isDefined(schema.exclusiveMinimum)) {
            input.min = schema.exclusiveMinimum + 1;
        }
        if (isDefined(schema.multipleOf)) {
            input.step = schema.multipleOf;
        }

        return input;
    }

    if ('string' === schema.type) {
        if (schema.enum) {
            if(schema.enum.length > 3) {
                return { name: 'select', options: schema.enum };
            } else {
                return { name: 'radio-list', options: schema.enum };
            }
        } else if ('Color' === schema.format) {
            return { name: 'input', type: 'color' };
        } else {
            input = { name: 'input', type: 'text' };

            if (isDefined(schema.maxLength)) {
                input.maxlength = schema.maxLength;
            }
            if (isDefined(schema.minLength)) {
                input.minlength = schema.minLength;
            }
            if (isDefined(schema.pattern)) {
                input.pattern = schema.pattern.toString();
            }

            return input;
        }
    }
}

function resolveDisplayByProperties(schema) {
    if (schema.properties) {
        return 'group';
    }
}

function resolveDisplay(schema) {
    return resolveDisplayByType(schema) ||
        resolveDisplayByProperties(schema) ||
        false;
}

function walkSchema(schemaObj, transformFn, id, parent) {
    transformFn(schemaObj, id, parent);

    if (isObjectNotArray(schemaObj.properties)) {
        _.each(schemaObj.properties, function (propObj, propId) {
            walkSchema(propObj, transformFn, propId, schemaObj);
        })
    }
}

function createFormSchema(def, schema) {
    var formSchema = _.cloneDeep(schema);

    _.merge(formSchema, def);

    var orderIndex = 1000;

    walkSchema(formSchema, function (prop, id, parent) {
        //resolve display options
        if (!isDefined(prop.display)) {
            prop.display = resolveDisplay(prop);
        }

        //resolve path to property in original schema (e.g. scale.width)
        if(parent){
            prop.path = _.compact([parent.path, id]).join('.');
        }

        //resolve display level
        if(!parent){
            prop.level = 0;
        } else {
            prop.level = parent.level + 1;
        }

        //resolve display order
        if(!isDefined(prop.order)){
            prop.order = orderIndex++;
        }

        //todo: resolve display group
//        var group;
//        if (!parent) {
//            group = 'root';
//        } else {
//            group = [parent.group || 'root'];
//        }
//        if (prop.group) {
//            group.push(prop.group);
//        }
//        prop.group = group.join('.');
    });

    return formSchema;
}
var form = require('./examples/profile.form.js');
var schema = require('./examples/profile.schema.js');
var result = createFormSchema(form, schema);

result.properties.spin.display = 'group:tab';
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