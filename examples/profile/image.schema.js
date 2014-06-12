"use strict";

module.exports = {
    title: 'image',

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

        rotate: {type: 'number', description: 'Rotate image (degrees)', minimum: -180, maximum: 180,
            path: 'effects.rotate'
        },

        // http://www.web3.lu/jpeg-chroma-subsampling/
        // http://www.sounddevices.com/notes/pix/444-vs-422-color-sampling/
        //
        // Image Magick inherits sampling factor regardless of quality setting
        //      (the documentation says they use 4:4:4 when q>=90 and 4:2:0 otherwise)
        subsampling: { type: 'string', enum: ['4:4:4', '4:2:2', '4:2:0'] },

        // jpeg and webp only
        // 0 - inherit quality from parent
        // NOTE: -define jpeg:preserve-settings DOESN'T WORK (checked with coders/jpeg.c)
        quality: { type: 'number', description: 'Image quality', minimum: 0, maximum: 100 },

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
        brightness: {type: 'number', minimum: -100, maximum: 100, path: 'effects.brightness'},
        contrast: {type: 'number', minimum: -100, maximum: 100, path: 'effects.contrast'},
        exposure: {type: 'number', minimum: -100, maximum: 100, path: 'effects.exposure'},
        grayscale: {type: 'boolean', description: 'Transform the image to black and white', path: 'effects.greyscale'},
        blur: {type: 'number', description: 'Apply a blur effect to the image', path: 'effects.blur'},
        tiltshift: {type: 'boolean', description: 'Apply a tilt-shift effect to the image', path: 'effects.tiltshift'},
        frame: {
            properties: {
                style: { type: 'string', enum: ['simple', 'mirror', 'edge', 'deckled', 'none'] },
                color: { type: 'string', format: 'Color' },
                width: { type: 'number' },
                rim: {
                    color: { type: 'string' },
                    width: { type: 'number' }
                }
            },
            additionalProperties: false,
            required: ['style'],
            path: 'effects.frame'
        },
        text: {
            properties: {
                style: { type: 'string', enum: ['simple', 'soft', 'none']},
                font: {
                    properties: {
                        family: { type: 'string' },
                        weight: { type: 'string', enum: ['light', 'normal', 'semi-bold', 'bold', 'extra-bold',
                            '300', '400', '600', '700', '800'] },
                        style: { type: 'string', enum: ['normal', 'italic']},
                        size: {
                            oneOf: [
                                { type: 'number', minimum: 0 },
                                { type: 'string', format: 'Percentage' }
                            ]
                        }
                    }
                },
                text: { type: 'string', maxLength: 100},
                color: { type: 'string', format: 'Color'},
                opacity: { type: 'number', minimum: 0, maximum: 100},
                background: {
                    properties: {
                        color: { type: 'string', format: 'Color'},
                        opacity: { type: 'number', minimum: 0, maximum: 100}
                    }
                },
                outline: {
                    properties: {
                        color: { type: 'string', format: 'Color'},
                        width: { type: 'number', minimum: 0}
                    }
                },
                size: { type: 'string', format: 'Percentage' },
                position: { type: 'string', enum: ['north', 'northeast', 'northwest', 'center', 'south', 'southeast',
                    'southwest', 'east', 'west']}
            },
            required: ['text'],
            additionalProperties: false
        },
        colortone: { type: 'string', enum: ['sepia', 'warm', 'cold', 'sunset', 'purpletan', 'texas', 'none'], path: 'effects.colortone' },
        vignette: {
            properties: {
                color: { type: 'string', format: 'Color'},
                value: { type: 'number', minimum: 0, maximum: 1 }
            },
            additionalProperties: false,
            path: 'effects.vignette'
        }
    }
};