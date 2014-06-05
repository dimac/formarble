"use strict";

var util = require('util');
var _ = require('lodash');

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
    if(value.match(/[a-z]/i)){
        value = value.replace(/([a-z])[\W]+/g, '$1 ');
        value = value.replace(/([a-z])([A-Z]+)/g, function (matched, low, high) {
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

function walkSchema(schemaObj, transformFn, id, parent) {
    transformFn(schemaObj, id, parent);

    if (isObjectNotArray(schemaObj.properties)) {
        _.each(schemaObj.properties, function (propObj, propId) {
            walkSchema(propObj, transformFn, propId, schemaObj);
        })
    }
}

function createFormSchema(schema, def) {
    var formSchema = _.cloneDeep(schema);

    if (def) {
        _.merge(formSchema, def);
    }

    var orderIndex = 1000;

    walkSchema(formSchema, function (prop, id, parent) {
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
        if (!isDefined(prop.title) && 'group' !== prop.display.name) {
            prop.title = humanize(id);
        }

        //resolve display order
        if (!isDefined(prop.order)) {
            prop.order = orderIndex++;
        }

        if (parent) {
            //resolve required
            if (parent.required && parent.required.indexOf(id) > -1) {
                prop.display.required = true;
            }

            //resolve path to property in original schema (e.g. scale.width)
            prop.path = _.compact([parent.path, id]).join('.');

            //resolve display level
            prop.level = parent.level + 1;
        } else {
            //resolve display level
            prop.level = 0;
        }

        //todo: resolve display group
    });

    return formSchema;
}

exports.extend = function (schema, form) {
    return createFormSchema(schema, form);
}

return;

