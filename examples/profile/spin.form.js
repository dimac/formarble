"use strict";

var formarble = require('../..');

var image = require('./image.form.js');

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
            display: {
                name:'fm-tree',
                tree: ['main', 'zoom', 'fullscreen'],
                open: true
            },
            properties: {
                main: formarble.merge(image, {title: 'Main image'}),
                zoom: formarble.merge(image, {title: 'Zoom image'}),
                fullscreen: formarble.merge(image, {title: 'Fullscreen image'})
            }
        },
        startRow: {
            display: formats.numberOrAuto
        },
        startColumn: {
            display: formats.numberOrAuto
        }
    }
}


//aggregate image forms
formarble.fixInjectedSchema(form, 'images.main');
formarble.fixInjectedSchema(form, 'images.zoom');
formarble.fixInjectedSchema(form, 'images.fullscreen');

module.exports = form;

