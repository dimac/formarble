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
    display: {
        name: 'tree',
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
        }
    }
}
