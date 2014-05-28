"use strict";

var formats = {
    offset: {
        name: 'input',
        type: 'text',
        pattern: /^[\+\-]?\d+(\.\d+)?(%|px)?|center$/.toString()
    },
    size: {
        name: 'input',
        type: 'text',
        pattern: /^\d+(\.\d+)?(%|px)?$/.toString()
    }
}

module.exports = {
    title: 'Image options',
    display: 'group:tab',

    properties: {
        customProp: {
            type: 'string',
            maxLength: 255,
            order: 1
        },

        vignette: {
            properties: {
                value: {
                    display: {
                        name: 'input',
                        type: 'range',
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
            display: 'group:fieldset',

            properties: {
                width: {
                    display: formats.size
                },
                height: {
                    display: formats.size
                }
            },
//            order: 2,
            group: 'scale'
        },

        //crop group
        crop: {
            title: 'Crop options',
            display: 'group:fieldset',
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
                }
            }
        }
    }
}
