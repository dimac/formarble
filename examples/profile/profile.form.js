"use strict";

var formarble = require('../..');

var image = require('./image.form.js');
var spin = require('./spin.form.js');

var form = {
    title: 'Profile',
    display: {
        name: 'fm-tree',
        tree: ['image', 'spin']
    },

    properties: {
        image: formarble.merge(image, {title: 'Image settings'}),
        spin: formarble.inject(spin, {title: 'Spin settings'})
    }
}

//formarble.fixInjectedSchema(form, 'image');
//formarble.fixInjectedSchema(form, 'spin');

module.exports = form;