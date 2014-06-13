"use strict";

var _ = require('lodash');
var formarble = require('../..');

var form = {
    title: 'Profile',
    display: {name: 'tree', tree: ['image', 'spin'] }
}

var image = require('./image.form.js');
var spin = require('./spin.form.js');

formarble.setChild(form, 'image', image, {title: 'Image settings'});
formarble.setChild(form, 'spin', spin, {title: 'Spin settings'});

module.exports = form;