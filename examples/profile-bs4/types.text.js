"use strict";

var generic = require('./types.generic.js');

exports.schema = {
    properties: {
        style: { type: 'string', enum: ['simple', 'soft', 'none']},
        font: {
            properties: {
                family: { type: 'string' },
                weight: { type: 'string', enum: ['light', 'normal', 'semi-bold', 'bold', 'extra-bold',
                    '300', '400', '600', '700', '800'] },
                style: { type: 'string', enum: ['normal', 'italic']},
                size: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ]
                }
            }
        },
        text: { type: 'string', maxLength: 100},
        color: { type: 'string', format: 'Color'},
        opacity: { type: 'number', minimum: 0, maximum: 100},
        background: {
            properties: {
                color: { type: 'string', format: 'Color'},
                opacity: { type: 'number', minimum: 0, maximum: 100}
            }
        },
        outline: {
            properties: {
                color: { type: 'string', format: 'Color'},
                width: { type: 'number', minimum: 0}
            }
        },
        size: { type: 'string', format: 'Percentage' },
        position: { type: 'string', enum: ['north', 'northeast', 'northwest', 'center', 'south', 'southeast',
            'southwest', 'east', 'west']}
    },
    required: ['text'],
    additionalProperties: false
};

exports.form = {
    title: 'Text overlay',

    properties: {
        text: {
            order: 1,
            display: {
                name: 'fm-textarea'
            }
        },
        background: {
            properties: {
                opacity: {
                    display: {
                        name: 'fm-input-range'
                    }
                }
            }
        },
        font: {
            properties: {
                size: {
                    display: generic.size
                }
            }
        }
    }
};
