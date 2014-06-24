"use strict";

var text = require('./types.text.js').schema;

module.exports = {
    properties: {

        profile: { type: 'string' },

        format: { type: 'string', enum: ['png', 'jpg', 'webp'] },

        scale: {
            properties: {
                width: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Width'

                },
                height: {
                    oneOf: [
                        { type: 'number', minimum: 0 },
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Height'

                },
                option: { type: 'string', enum: ['fit', 'fill', 'ignore', 'noup'] }
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
                    description: 'Width'

                },
                height: {
                    oneOf: [
                        { type: 'number', minimum: 0},
                        { type: 'string', format: 'Percentage' }
                    ],
                    description: 'Height'

                },
                x: {
                    oneOf: [
                        { type: 'number' }, // in pixels
                        { type: 'string', format: 'Percentage' },
                        { type: 'string', enum: ['center'] }
                    ],
                    description: 'X offset' // out of top left corner, can be +- and %

                },
                y: {
                    oneOf: [
                        { type: 'number' }, // pixels
                        { type: 'string', format: 'Percentage' },
                        { type: 'string', enum: ['center'] }
                    ],
                    description: 'Y offset' // out of top left corner, can be +- and %

                }
            },
            description: 'Crop the image',
            additionalProperties: false
        },

        thumbnail: { type: 'number', minimum: 1, maximum: 256, description: 'Create square thumbnail of specified size' },

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

        rotate: {type: 'number', description: 'Rotate image (degrees)', minimum: -180, maximum: 180},

        // http://www.web3.lu/jpeg-chroma-subsampling/
        // http://www.sounddevices.com/notes/pix/444-vs-422-color-sampling/
        //
        // Image Magick inherits sampling factor regardless of quality setting
        //      (the documentation says they use 4:4:4 when q>=90 and 4:2:0 otherwise)
        subsampling: { type: 'string', enum: ['4:4:4', '4:2:2', '4:2:0'] },

        // jpeg and webp only
        // 0 - inherit quality from parent
        // NOTE: -define jpeg:preserve-settings DOESN'T WORK (checked with coders/jpeg.c)
        quality: { type: 'number', description: 'Image quality', minimum: 0, maximum: 100},

        progressive: { type: 'boolean', description: 'Create progressive image'},

        // http://www.imagemagick.org/Usage/formats/#png_quality
        png: {
            properties: {
                // 0 is Huffman compression, 1-9 is Zlib compression
                compression: { type: 'number', description: 'PNG compression', minimum: 0, maximum: 9 },
                filtering: { type: 'string', enum: ['none', 'sub', 'up', 'average', 'paeth', 'adaptive']}
            },
            additionalProperties: false
        },

        webp: {
            properties: {
                fallback: { type: 'string', enum: ['png', 'jpg']}
            },
            additionalProperties: false
        },



        // effects:
        brightness: {type: 'number', minimum: -100, maximum: 100},
        contrast: {type: 'number', minimum: -100, maximum: 100},
        exposure: {type: 'number', minimum: -100, maximum: 100},
        grayscale: {type: 'boolean', description: 'Transform the image to black and white'},
        blur: {type: 'number', description: 'Apply a blur effect to the image'},
        tiltshift: {type: 'boolean', description: 'Apply a tilt-shift effect to the image'},
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
                text,
                { items: text }
            ]
        },
        colortone: { type: 'string', enum: ['sepia', 'warm', 'cold', 'sunset', 'purpletan', 'texas', 'none']},
        vignette: {
            properties: {
                color: { type: 'string', format: 'Color'},
                value: { type: 'number', minimum: 0, maximum: 1 }
            },
            additionalProperties: false
        }
    }
};