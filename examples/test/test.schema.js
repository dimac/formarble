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
                    '_format',
                    'scale',
                    'crop'
                ]
            },

            properties: {
                //+groups
                _format: {
                    title: 'Formats',

                    properties: {
                        jpg: { title: 'JPEG options',
                            properties: {
                                quality: {
                                    extend: 'image.quality'
                                }
                            }
                        }
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
                    description: 'Create progressive image',

                    path: 'image._format.jpg.progressive'
                },

                png: {
                    title: 'PNG options',

                    properties: {
                        // 0 is Huffman compression, 1-9 is Zlib compression
                        compression: { type: 'number', description: 'PNG compression', minimum: 0, maximum: 9 },
                        filtering: { type: 'string', enum: ['none', 'sub', 'up', 'average', 'paeth', 'adaptive']}
                    },

                    path: 'image._format.png'
                },

                webp: {
                    title: 'WebP options',

                    properties: {
                        quality: {
                            extend: 'image.quality'
                        },

                        fallback: {
                            type: 'string',
                            enum: ['png', 'jpg'],
                            display: {
                                labels: {png: 'PNG', jpg: 'JPEG'}
                            }
                        }
                    },

                    path: 'image._format.webp'
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