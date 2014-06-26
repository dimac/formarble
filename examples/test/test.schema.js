"use strict";

exports.schema = {
    title: 'Profile config',

    display: {
        name: 'fmTree',
        tree: [
            'image'
        ]
    },

    properties: {

        image: {
            title: 'Image settings',

            display: {
                name: 'fmTree',
                tree: [
                    'formats',
                    'scale',
                    'crop'
                ]
            },

            mapping: {
                'webp': 'formats.webp',
                'png': 'formats.png',
                'progressive': 'formats.jpg.progressive'
            },

            virtual: {
                'formats.jpg.quality': 'quality',
                'formats.webp.quality': 'quality'
            },

            properties: {
                injected: {
                    mapping: {
                        injected3: 'children.injected3'
                    },
                    properties: {
                        injected1: { type: 'string' },
                        injected2: { type: 'string' },
                        injected3: { type: 'string' }
                    }
                },

                //+groups
                formats: {
                    title: 'Formats',

                    properties: {
                        jpg: { title: 'JPEG options'}
                    }
                },
                //-groups

                profile: { type: 'string' },

                format: {
                    type: 'string',
                    enum: ['png', 'jpg', 'webp'],

                    display: {
                        labels: {png: 'PNG', jpg: 'JPEG', webp: 'WebP'}
                    }
                },

                //jpeg options
                quality: {
                    type: 'number',
                    minimum: 0,
                    maximum: 100,

                    display: {
                        name: 'fm-input-range'
                    }
                },

                progressive: {
                    type: 'boolean',
                    description: 'Create progressive image'
                },

                png: {
                    title: 'PNG options',

                    properties: {
                        // 0 is Huffman compression, 1-9 is Zlib compression
                        compression: { type: 'number', description: 'PNG compression', minimum: 0, maximum: 9},
                        filtering: { type: 'string', enum: ['none', 'sub', 'up', 'average', 'paeth', 'adaptive']}
                    }
                },

                webp: {
                    title: 'WebP options',

                    properties: {
                        fallback: {
                            type: 'string',
                            enum: ['png', 'jpg'],
                            display: {
                                labels: {png: 'PNG', jpg: 'JPEG'}
                            }
                        }
                    }
                },

                scale: {
                    properties: {
                        width: {
                            type: 'number', minimum: 0,
                            description: 'Width'

                        },
                        height: {
                            type: 'number', minimum: 0,
                            description: 'Height'

                        },
                        option: { type: 'string', enum: ['fit', 'fill', 'ignore', 'noup'] }
                    },
                    description: 'Scale the image to specified width and height'
                },

                crop: {
                    properties: {
                        width: {
                            type: 'number', minimum: 0,
                            description: 'Width'

                        },
                        height: {
                            type: 'number', minimum: 0,
                            description: 'Height'

                        },
                        x: {
                            type: 'number', minimum: 0,
                            description: 'X offset' // out of top left corner, can be +- and %

                        },
                        y: {
                            type: 'number', minimum: 0,
                            description: 'Y offset' // out of top left corner, can be +- and %
                        }
                    },
                    description: 'Crop the image'
                }
            }
        }
    }
};