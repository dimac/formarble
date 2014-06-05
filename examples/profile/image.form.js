"use strict";

var formats = {
    offset: {
        name: 'input',
        type: 'text',
        pattern: /^([\+\-]?(100%|\d{1,2}%|\d{1,4}px)?|center)$/.toString(),
        hint: '(+/-) 0-100% or 0-9999px or center'
    },
    size: {
        name: 'input',
        type: 'text',
        pattern: /^\d+(\.\d+)?(%|px)?$/.toString()
    }
}

module.exports = {
    title: 'Image options',
    display: {name: 'group:tab'},

    properties: {
        testText: {
            type: 'string',
            maxLength: 255,
            order: 1
        },

        testRange: {
            display: {
                name: 'input/range',
                min: 0,
                max: 1,
                step: 0.01
            },
            order: 2
        },

        testCheckbox: {
            type: 'boolean',
            order: 2,
            description: 'Check for true'
        },

        format: {
            display: {
                labels: { png:'PNG', webp:'WebP', jpg:'JPG' }
            }
        },

        subsampling: {
            display: {
                labels: {'4:4:4':'4:4:4 - Best quality'}
            }
        },

        text: {
            properties: {
                background: {
                    properties: {
                        opacity: {
                            display: {
                                name: 'input/range'
                            }
                        }
                    }
                }
            }
        },

        vignette: {
            properties: {
                value: {
                    display: {
                        name: 'input/range',
                        min: 0,
                        max: 1,
                        step: 0.01
                    }
                }
            }
        },

        //scale group
        scale: {
            title: 'Scaling options',
            display: {name: 'fieldset'},

            properties: {
                width: {
                    display: formats.size
                },
                height: {
                    display: formats.size
                },
                option: {
                    display: {
                        name: 'select',
                        labels: {
                            ignore: 'Ignore aspect ratio',
                            noup: 'No upscale'
                        }
                    }
                }
            },
//            order: 2,
            group: 'scale'
        },

        //crop group
        crop: {
            title: 'Crop options',
            display: {name: 'fieldset'},
//            order: 3,

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
        }
    }
}
