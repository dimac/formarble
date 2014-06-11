"use strict";

var util = require('util');
var _ = require('lodash');

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


function isDefined(value) {
    return undefined !== value;
}

function isObjectNotArray(value) {
    return _.isObject(value) && !_.isArray(value);
}

function ucFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function humanize(value) {
    if (value.match(/[a-z]/i)) {
        value = value.replace(/([a-z])[\W]+/g, '$1 ');
        value = value.replace(/([a-z])([A-Z]+|\d+)/g, function (matched, low, high) {
            return low + ' ' + (1 === high.length ? high.toLowerCase() : high);
        });
        return ucFirst(value);
    }

    return value;
}

function getInputName(value) {
    if (value) {
        return _.isString(value) ? value : value.name;
    }
}

function resolveDisplay(schema) {
    var input;

    switch (schema.type) {
        case 'boolean':
            input = { name: 'checkbox'};
            break;

        case 'number':
            input = { name: 'input/number'};
            break;

        case 'string':
            if (schema.enum) {
                if (schema.enum.length > 3) {
                    input = { name: 'select' };
                } else {
                    input = { name: 'radiolist' };
                }
            } else if ('Color' === schema.format) {
                input = { name: 'input/color' };
            } else {
                input = { name: 'input', type: 'text' };
            }
            break;

        default:
            if (isObjectNotArray(schema.properties)) {
                input = { name: 'group' };
            }
    }

    if (input) {
        resolveInputOptions(input, schema);
    }

    return input;
}

function resolveDisplayFallback(input, schema) {
    switch (getInputName(input)) {
        case 'input/range':
            input.fallback = {name: 'input', type: 'range'};
            break;

        case 'input/number':
            input.fallback = {name: 'input', type: 'number'};
            break;

        case 'input/color':
            input.fallback = {name: 'input', type: 'color'};
            break;

        case 'textarea':
            input.fallback = {name: 'input', type: 'text'};
            break;

        case 'radio-list':
            input.fallback = {name: 'select'};
            break;

        case 'fieldset':
            input.fallback = {name: 'group'};
            break;

    }
    return schema;
}

function resolveInputOptions(input, schema) {

    switch (getInputName(input)) {
        case 'input/range':
        case 'input/number':
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
            break;

        case 'input':
            if (isDefined(schema.maxLength)) {
                input.maxlength = schema.maxLength;
            }
            if (isDefined(schema.minLength)) {
                input.minlength = schema.minLength;
            }
            if (isDefined(schema.pattern)) {
                input.pattern = schema.pattern.toString();
            }
            break;

        case 'radiolist':
        case 'select':
            input.options = schema.enum.map(function (value) {
                var title = (schema.display && schema.display.labels && schema.display.labels[value]) || humanize(value);
                return {id: value, title: title};
            })
            break;

    }
    return input;
}

function walkSchema(schema, transformFn, childrenFirst) {

    function _walkSchema(obj, id, path, parent) {
        if (!childrenFirst) {
            transformFn(obj, id, path, parent);
        }

        if (isObjectNotArray(obj.properties)) {
            _.each(obj.properties, function (prop, propId) {
                var propPath = path ? path + '.' + propId : propId;

                _walkSchema(prop, propId, propPath, obj);
            })
        }

        if (childrenFirst) {
            transformFn(obj, id, path, parent);
        }
    }

    _walkSchema(schema, '', '');
}


/**
 * Create form schema based on {schema}
 * 1. Resolve base options
 * 2. Apply properties grouping
 *
 * @param schema
 * @returns {*}
 */
exports.create = function (schema) {
    var result;
    var nodes = {};

    //walk through schema, collect nodes with original and move paths
    walkSchema(schema, function (src, id, path, parent) {
        //clone source node
        var prop = _(src).omit('properties').cloneDeep();

        if (path) {
            //detect base node move
            var baseFrom = path.slice(0, -id.length - 1);
            var baseTo = nodes[baseFrom] && nodes[baseFrom].path;

            //set paths
            prop._path = prop._path || path;
            prop.path = prop.path || (baseTo ? path.replace(baseFrom, baseTo) : path);

            nodes[path] = prop;
        } else {
            //root node
            result = prop;
        }
    });

    //move each node it its place in resulting schema
    _.each(nodes, function (prop, id) {
        schemaSet(result, prop.path, prop);
    });

    //resolve path for newly created nodes
    walkSchema(result, function (src, id, path, parent) {
        src.path = src.path || path;
    })

    return result;
}

exports.merge = function (dest, src) {
    return _.merge(dest, src);
}

exports.ui = function (schema) {
    var orderIndexStart = 1000;

    walkSchema(schema, function (prop, id, path, parent) {
        var auto = resolveDisplay(prop);

        //resolve display options
        if (auto) {
            if (prop.display) {
                prop.display = _.merge(auto, prop.display);
            } else {
                prop.display = auto;
            }
        }

        if (prop.hidden) {
            prop.display = false
        }

        if (!prop.display) {
            return;
        }

        resolveDisplayFallback(prop.display, prop);

        //add title
        if (!isDefined(prop.title)/* && 'group' !== prop.display.name*/) {
            prop.title = humanize(id);
        }

        //resolve display order
        if (!isDefined(prop.order)) {
            prop.order = orderIndexStart++;
        }

        if (parent) {
            //resolve required
            if (parent.required && parent.required.indexOf(id) > -1) {
                prop.display.required = true;
            }

            //resolve display level
            prop.level = parent.level + 1;
        } else {
            //resolve display level
            prop.level = 0;
        }
    })
}

