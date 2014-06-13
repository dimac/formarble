"use strict";
var _ = require('lodash');

module.exports = {
    properties: {
        image: _.cloneDeep(require('./image.schema.js')),
        spin: _.cloneDeep(require('./spin.schema.js'))
    }
}