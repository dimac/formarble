"use strict";

var _ = require('lodash');
var formarble = require('../..');

var form = {
    title: 'Spin options',

    display: {
        name: 'tree',
        tree: ['images']
    },

    properties: {
        images: {
            title: 'Images',
            display: { name:'tree', tree: ['main', 'zoom', 'fullscreen'] }
        }
    }
}

var image = require('./image.form.js');
//aggregate image forms
formarble.setChild(form, 'images.main', image, {title: 'Main image'});
formarble.setChild(form, 'images.zoom', image, {title: 'Zoom image'});
formarble.setChild(form, 'images.fullscreen', image, {title: 'Fullscreen image'});

module.exports = form;

