"use strict";

var image = require('./image.schema.js');
var _ = require('lodash');

module.exports = {
    properties: {
        images: {
            properties: {
                main: _.cloneDeep(image),
                zoom: _.cloneDeep(image),
                fullscreen: _.cloneDeep(image)
            },
            additionalProperties: false,
        },
        // Autospin
        autospin: { type: 'string', enum: ['once', 'twice', 'infinite', 'off']},
        autospinSpeed: { type: 'number' },
        autospinStart: { type: 'string' },
        autospinDirection: { type: 'string', enum: ['clockwise', 'anticlockwise', 'alternate-clockwise', 'alternate-aniticlockwise']},

        // Full-screen & magnifier
        fullscreen: { type: 'boolean' },
        zoom: { type: 'number', minimum: 0 }, // 0 = disabled, >=1 => zoom factor

        // Other settings
        initializeOn: {type: 'string', enum: ['load', 'hover', 'click']},
        speed: {type: 'number', minimum: 0, maximum: 100},
        hint: { type: 'boolean' },
        startColumn: {
            oneOf: [
                { type: 'number', minimum: 1 },
                { type: 'string', enum: ['auto'] }
            ],
        },
        startRow: {
            oneOf: [
                { type: 'number', minimum: 1 },
                { type: 'string', enum: ['auto'] }
            ],
        },
        spin: {type: 'string', enum: ['drag', 'hover']},
        rightClick: { type: 'boolean' },
        mousewheelStep: {type: 'number'},
        loopColumn: { type: 'boolean' },
        loopRow: { type: 'boolean' },

        autospinStop: { type: 'string', enum: ['click', 'hover', 'never' ]},
        swapRowsColumns: { type: 'boolean'},

        retina: { type: 'boolean' },

        // Text
        loadingText: {type: 'string'},
        fullscreenLoadingText: {type: 'string'},
        hintText: {type: 'string'},
        mobileHintText: {type: 'string'},

        reverseRotation: { type: 'string', enum: ['row', 'column', 'both', 'off'] },

        emulate3D: { type: 'boolean' }
    }
};