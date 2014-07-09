"use strict";

var formarble = require('../..');

var generic = require('./types.generic');
var crop = require('./types.crop');
var scale = require('./types.scale');
var text = require('./types.text');

exports.schema = {
    properties: {

        profile: { type: 'string', defaultHint: 'Don\'t apply profile' },

        format: {
            type: 'string',
            enum: ['png', 'jpg', 'webp'],
            recommend: 'jpg',
            defaultHint: 'Preserve original image format'
        },

        scale: {
            properties: {
                width: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Width',
                    defaultHint: 'No width scaling'

                },
                height: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Height',
                    defaultHint: 'No height scaling'

                },
                option: { type: 'string', enum: ['fit', 'fill', 'ignore', 'noup'], defaultHint: 'Fit image', recommend: 'fit' }
            },
            description: 'Scale the image to specified width and height',
            additionalProperties: false
        },

        crop: {
            properties: {
                width: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Width',
                    defaultHint: 'No width cropping'

                },
                height: {
                    oneOf: [
                        { type: 'number', minimum: 0},
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Height',
                    defaultHint: 'No height cropping'

                },
                x: {
                    oneOf: [
                        { type: 'number' }, // in pixels
                        { type: 'string', format: 'Percentage' },
                        { type: 'string', enum: ['center'] }
                    ],
                    description: 'X offset', // out of top left corner, can be +- and %
                    defaultHint: 'No X offset'

                },
                y: {
                    oneOf: [
                        { type: 'number' }, // pixels
                        { type: 'string', format: 'Percentage' },
                        { type: 'string', enum: ['center'] }
                    ],
                    description: 'Y offset', // out of top left corner, can be +- and %
                    defaultHint: 'No Y offset'

                }
            },
            description: 'Crop the image',
            additionalProperties: false
        },

        thumbnail: { type: 'number', minimum: 1, maximum: 256, description: 'Create square thumbnail of specified size', defaultHint: 'Don\'t create thumbnail' },

        tile: {
            hidden: true,
            properties: {
                width: { type: 'number', minimum: 1, description: 'Tile width' },
                height: { type: 'number', minimum: 1, description: 'Tile height' },
                number: { type: 'number', minimum: 0 }
            },
            description: 'Tile the image',
            additionalProperties: false
        },

        rotate: {type: 'number', description: 'Rotate image (degrees)', minimum: -180, maximum: 180, defaultHint: 'No'},

        // http://www.web3.lu/jpeg-chroma-subsampling/
        // http://www.sounddevices.com/notes/pix/444-vs-422-color-sampling/
        //
        // Image Magick inherits sampling factor regardless of quality setting
        //      (the documentation says they use 4:4:4 when q>=90 and 4:2:0 otherwise)
        subsampling: { type: 'string', enum: ['4:4:4', '4:2:2', '4:2:0'], defaultHint: 'Preserve original subsampling'},

        // jpeg and webp only
        // 0 - inherit quality from parent
        // NOTE: -define jpeg:preserve-settings DOESN'T WORK (checked with coders/jpeg.c)
        quality: {
            type: 'number',
            description: 'Image quality (0 - same as original)',
            minimum: 0,
            maximum: 100,
            recommend: 92,
            defaultHint: '92%'
        },

        progressive: { type: 'boolean', description: 'Create progressive image', defaultHint: 'No', recommend: false},

        // http://www.imagemagick.org/Usage/formats/#png_quality
        png: {
            properties: {
                // 0 is Huffman compression, 1-9 is Zlib compression
                compression: { type: 'number', description: 'PNG compression', minimum: 0, maximum: 9 },
                filtering: { type: 'string', enum: ['none', 'sub', 'up', 'average', 'paeth', 'adaptive'], recommend:'up', defaultHint: 'Up'}
            },
            additionalProperties: false
        },

        webp: {
            properties: {
                fallback: { type: 'string', enum: ['png', 'jpg'], recommend: 'png', defaultHint: 'PNG'}
            },
            additionalProperties: false
        },



        // effects:
        brightness: {type: 'number', minimum: -100, maximum: 100, defaultHint: 'No'},
        contrast: {type: 'number', minimum: -100, maximum: 100, defaultHint: 'No'},
        exposure: {type: 'number', minimum: -100, maximum: 100, defaultHint: 'No'},
        grayscale: {type: 'boolean', description: 'Transform the image to black and white', defaultHint: 'No'},
        blur: {type: 'number', description: 'Apply a blur effect to the image', defaultHint: 'No'},
        tiltshift: {type: 'boolean', description: 'Apply a tilt-shift effect to the image', defaultHint: 'No'},
        frame: {
            properties: {
                style: { type: 'string', enum: ['simple', 'mirror', 'edge', 'deckled', 'none'] },
                color: { type: 'string', format: 'Color' },
                width: { type: 'number' },
                rim: {
                    properties: {
                        color: { type: 'string', format:'Color' },
                        width: { type: 'number' }
                    }
                }
            },
            additionalProperties: false,
            required: ['style']
        },
        text: {
            oneOf: [
                text.schema,
                { items: text.schema }
            ]
        },
        colortone: { type: 'string', enum: ['sepia', 'warm', 'cold', 'sunset', 'purpletan', 'texas', 'none'], defaultHint: 'No'},
        vignette: {
            properties: {
                color: { type: 'string', format: 'Color'},
                value: { type: 'number', minimum: 0, maximum: 1 }
            },
            additionalProperties: false
        }
    }
};

exports.form = {
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
                labels: { '': 'Auto', png: 'PNG', webp: 'WebP', jpg: 'JPG' }
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
        png: {
            properties: {
                compression: {
                    display: {name: 'fm-input-range'}
                }
            }
        },

        brightness: {order: 1},
        contrast: {order: 2},
        exposure: {order: 3},
        grayscale: {order: 4},
        colortone: {order: 5},
        blur: {order: 6},

        text: {
            title: 'Text overlays',
            display: {
                name: 'fm-input-group',
                fmInputGroup: {
                    label: '{{model.text || "New overlay " + index}}'
                }
            },
            items: formarble.import(text)
        },
        //scale group
        scale: formarble.import(scale),
        //crop group
        crop: formarble.import(crop)
    }
}