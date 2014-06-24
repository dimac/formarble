"use strict";

var formarble = require('../..');

var generic = require('./types.generic');
var crop = require('./types.crop');
var scale = require('./types.scale');
var text = require('./types.text');

module.exports = {
    title: 'Image options',

    //formarble extensions: display, mapping, virtual
    display: {
        name: 'fm-tree',
        tree: ['scale', 'crop', 'text', 'effects']
    },

    mapping: {
        subsampling: 'jpeg.subsampling',
        progressive: 'jpeg.progressive',

        brightness: 'effects.brightness',
        contrast: 'effects.contrast',
        exposure: 'effects.exposure',
        grayscale: 'effects.grayscale',
        colortone: 'effects.colortone',
        blur: 'effects.blur',
        rotate: 'effects.rotate',
        tiltshift: 'effects.tiltshift',
        vignette: 'effects.vignette',
        frame: 'effects.frame'
    },

    virtual: {
        'webp.quality': 'quality',
        'jpeg.quality': 'quality'
    },
    //--

    properties: {
        effects: {
            display: {
                name: 'fm-tree',
                tree: ['frame', 'vignette']
            }
        },

        format: {
            display: {
                labels: { png: 'PNG', webp: 'WebP', jpg: 'JPG' }
            }
        },

        subsampling: {
            display: {
                labels: {'4:4:4': '4:4:4 - Best quality'}
            }
        },
        quality: {
            display: {name: 'fm-input-range'}
        },

        brightness: {order: 1},
        contrast: {order: 2},
        exposure: {order: 3},
        grayscale: {order: 4},
        colortone: {order: 5},
        blur: {order: 6},

        text: {
            title: 'Text overlays',
            display: {name: 'fm-input-group'},
            items: formarble.import('text', text)
        },
        //scale group
        scale: formarble.import('scale', scale),
        //crop group
        crop: formarble.import('crop', crop)
    }
}