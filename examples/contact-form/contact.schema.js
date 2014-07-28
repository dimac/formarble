"use strict";

module.exports = {
    title: 'How can we help?',

    properties: {
        issue: {
            type: 'string',
            enum: ['tech-support', 'feature-request', 'bug-report'],

            display: {
                name: 'fm-radio-list',
                inline: true
            }
        },

        priority: {
            type: 'string',
            enum: ['low', 'normal', 'high', 'urgent'],

            display: {
                name: 'fm-radio-list'
            }
        },

        summary: {
            type: 'string',
            maxLength: 100
        },

        message: {
            type: 'string',
            maxLength: 2048,
            display: {name: 'fm-textarea'}
        }
    },
    required: ['issue', 'priority', 'summary', 'message'],
    focus: 'summary'
};