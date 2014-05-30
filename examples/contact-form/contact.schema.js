"use strict";

module.exports = {
    title: 'How can we help?',

    properties: {

        issue: {
            type: 'string',
            enum: ['tech-support', 'feature-request', 'bug-report']
        },

        priority: {
            type: 'string',
            enum: ['low', 'normal', 'high', 'urgent']
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