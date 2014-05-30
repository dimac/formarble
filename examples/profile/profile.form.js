"use strict";

module.exports = {
    title: 'Profile',
    display: 'group:tab',

    properties: {
        image: require('./image.form.js'),
        spin: require('./spin.form.js')
    }
}

module.exports.properties.image.display = module.exports.properties.spin.display = 'group';