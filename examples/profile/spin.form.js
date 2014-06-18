"use strict";

var _ = require('lodash');
var formarble = require('../..');

var formats = {
    numberOrAuto: {
        name: 'fm-input',
        type: 'text',
        pattern: /^\d+|auto$/.toString(),
        hint: '[Number] or "auto"'
    }
}

var form = {
    title: 'Spin options',

    display: {
        name: 'fm-tree',
        tree: ['images']
    },

    properties: {
        images: {
            title: 'Images',
            display: { name:'fm-tree', tree: ['main', 'zoom', 'fullscreen'], open: true }
        },
        startRow: {
            display: formats.numberOrAuto
        },
        startColumn: {
            display: formats.numberOrAuto
        }
    }
}

var image = require('./image.form.js');
//aggregate image forms
formarble.setChild(form, 'images.main', image, {title: 'Main image'});
formarble.setChild(form, 'images.zoom', image, {title: 'Zoom image'});
formarble.setChild(form, 'images.fullscreen', image, {title: 'Fullscreen image'});

module.exports = form;

