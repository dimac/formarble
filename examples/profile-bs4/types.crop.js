"use strict";

var generic = require('./types.generic.js');

module.exports = {
    title: 'Crop options',
    properties: {
        width: {
            display: generic.size
        },
        height: {
            display: generic.size
        },
        x: {
            display: generic.offset
        },
        y: {
            display: generic.offset
        }
    }
}
