"use strict";

module.exports = {
    title: 'How can we help?',

    properties: {

        issue: {
            type: 'string',
            enum: ['tech-support', 'feature-request', 'bug-report'],

            display: {
                name: 'radio-list'
            }
        },

        priority: {
            type: 'string',
            enum: ['low', 'normal', 'high', 'urgent'],

            display: {
                name: 'radio-list'
            }
        },

        summary: {
            type: 'string',
            maxLength: 255
        },

        message: {
            type: 'string',
            maxLength: 2048
        }
    }
};