"use strict";

var _ = require('lodash');

var a = {},
    c = {
        a: a,
        b: a
    };

var cc = _.cloneDeep(c);

console.log(cc.a === cc.b);