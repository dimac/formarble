"use strict";

var generic = require('./types.generic');

module.exports = {
    title: 'Scaling options',

    mapping: {
        option: 'options.type'
    },

    properties: {
        width: {
            display: generic.size
        },
        height: {
            display: generic.size
        },
        option: {
            display: {
                name: 'fm-select',
                labels: {
                    ignore: 'Ignore aspect ratio',
                    noup: 'No upscale'
                }
            }
        }
    }
}