"use strict";

var _ = require('lodash');

var formats = {
    offset: {
        name: 'fm-input',
        type: 'text',
        pattern: /^([\+\-]?(100%|\d{1,2}%|\d{1,4}px)?|center)$/.toString(),
        hint: '(+/-) 0-100% or 0-9999px or center'
    },
    size: {
        name: 'fm-input',
        type: 'text',
        pattern: /^\d+(\.\d+)?(%|px)?$/.toString(),
        hint: '[Number] or [Number]px or [Number]%'
    }
}

module.exports = {
    root: true,
    title: 'Image options',
    display: {
        name: 'fm-tree',
        tree: ['scale','crop','text','effects']
    },

    properties: {
        format: {
            display: {
                labels: { png:'PNG', webp:'WebP', jpg:'JPG' }
            }
        },

        subsampling: {
            display: {
                labels: {'4:4:4':'4:4:4 - Best quality'}
            },
            path: 'jpeg.subsampling'
        },
        progressive: {
            path: 'jpeg.progressive'
        },
        quality: {
            display: {name: 'fm-input-range'},

            path: 'jpeg.quality'
        },

        webp: {
            properties: {
                quality: {
                    extend: 'quality'
                }
            }
        },

        //effects
        brightness: {path: 'effects.brightness', order: 1},
        contrast: {path: 'effects.contrast', order: 2},
        exposure: {path: 'effects.exposure', order: 3},
        grayscale: {path: 'effects.grayscale', order: 4},
        colortone: {path: 'effects.colortone', order: 5},
        blur: {path: 'effects.blur', order: 6},

        rotate: {path: 'effects.rotate'},
        tiltshift: {path: 'effects.tiltshift'},

        vignette: {path: 'effects.vignette'},
        frame: {path: 'effects.frame'},
        //--effects

        text: {
            title: 'Text overlay',

            properties: {
                text: {
                    order: 1
                },
                background: {
                    properties: {
                        opacity: {
                            display: {
                                name: 'fm-input-range'
                            }
                        }
                    }
                },
                font: {
                    properties: {
                        size: {
                            display: formats.size
                        }
                    }
                }
            }
        },

        //scale group
        scale: {
            title: 'Scaling options',
            properties: {
                width: {
                    display: formats.size
                },
                height: {
                    display: formats.size
                },
                option: {
                    display: {
                        name: 'fm-select',
                        labels: {
                            ignore: 'Ignore aspect ratio',
                            noup: 'No upscale'
                        }
                    }
                }
            }
        },

        //crop group
        crop: {
            title: 'Crop options',
            properties: {
                width: {
                    display: formats.size
                },
                height: {
                    display: formats.size
                },
                x: {
                    display: formats.offset
                },
                y: {
                    display: formats.offset
                }
            }
        },

        thumbnail: {
            path: 'crop.thumbnail'
        }
    }
}


var mappingSchema = {
    title: 'Image settings',
    properties: {
        scale: 'scale',
        crop: ['crop', 'thumbnail'],
        text: 'text',
        effects: ['brightness', 'contrast', 'exposure', 'greyscale', 'colortone', 'blur', 'rotate', 'tiltshift', 'frame', 'vignette'],

        profile: 'profile',
        format: 'format',
        jpg: ['subsampling', 'quality', 'progressive'],
        png: ['compression', 'filtering'],
        webp: ['quality', 'fallback']
    }
}