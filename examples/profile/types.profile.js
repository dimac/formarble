"use strict";
var _ = require('lodash');

var formarble = require('../..');
var image = require('./types.image');
var spin = require('./types.spin');

exports.schema = {
    properties: {
        image: _.cloneDeep(image.schema),
        spin: _.cloneDeep(spin.schema)
    }
}

exports.form = {
    title: 'Profile',
    display: {
        name: 'fm-tree',
        tree: ['image', 'spin']
    },

    mapping: {},
    virtual: {},

    properties: {
        image: formarble.import(image.form, {title: 'Image settings'}),
        spin: formarble.import(spin.form, {title: 'Spin settings'})
    }
}