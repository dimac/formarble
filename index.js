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

function resolveDisplay(schema) {
    return resolveDisplayByType(schema) ||
        resolveDisplayByProperties(schema) ||
        false;
}

function resolveDisplayByType(schema) {
    var input;

    if ('boolean' === schema.type) {
        return { name: 'input', type: 'checkbox' };
    }

    if ('number' === schema.type || 'integer' === schema.type) {
        return { name: 'input', type: 'number' };
    }

    if ('string' === schema.type) {
        if (schema.enum) {
            if (schema.enum.length > 3) {
                return { name: 'select'};
            } else {
                return { name: 'radio-list'};
            }
        } else if ('Color' === schema.format) {
            return { name: 'input', type: 'color' };
        } else {
            return { name: 'input', type: 'text' };
        }
    }
}

function resolveDisplayByProperties(schema) {
    if (isObjectNotArray(schema.properties)) {
        return { name: 'group' };
    }
}

function extendDisplayInput(schema) {
    var input = schema.display;

    switch (input.type) {
        case 'range':
        case 'number':
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

        case 'text':
            if (isDefined(schema.maxLength)) {
                input.maxlength = schema.maxLength;
            }

            if (!input.maxlength || input.maxlength > 255) {
                input.name = 'textarea';
                delete input.type;
            }

            if (isDefined(schema.minLength)) {
                input.minlength = schema.minLength;
            }
            if (isDefined(schema.pattern)) {
                input.pattern = schema.pattern.toString();
            }
            break;
    }
    return input;
}

function extendDisplaySelect(schema) {
    var input = schema.display;

    if(input.labels){
        input.options = schema.enum.map(function (value) {
            return {id: value, title: input.labels[value] || humanize(value)}
        })
    } else {
        input.options = schema.enum.map(function (value) {
            return {id: value, title: humanize(value)}
        })
    }

    return input;
}

var extendDisplayRadioList = extendDisplaySelect;

function extendDisplay(schema) {
    switch (schema.display.name) {
        case 'input':
            return extendDisplayInput(schema);

        case 'select':
            return extendDisplaySelect(schema);

        case 'radio-list':
            return extendDisplayRadioList(schema);
    }

    return schema.display;
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
        //resolve display options
        if (!isDefined(prop.display)) {
            prop.display = resolveDisplay(prop);
        }

        if (!isDefined(prop.display.name)) {
            _.extend(prop.display, resolveDisplay(prop));
        }

        if (parent && parent.required && parent.required.indexOf(id) > -1) {
            prop.display.required = true;
        }

        prop.display = extendDisplay(prop);


        //add title
        if (!isDefined(prop.title) && 'group' !== prop.display.name) {
            prop.title = humanize(id);
        }

        //resolve path to property in original schema (e.g. scale.width)
        if (parent) {
            prop.path = _.compact([parent.path, id]).join('.');
        }

        //resolve display level
        if (!parent) {
            prop.level = 0;
        } else {
            prop.level = parent.level + 1;
        }

        //resolve display order
        if (!isDefined(prop.order)) {
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

exports.extend = function (schema, form) {
    return createFormSchema(schema, form);
}

return;

