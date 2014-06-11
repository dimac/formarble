"use strict";

exports.schema = {
    title: 'How can we help?',

    display: {
        name: 'tree'
    },

    properties: {

        treeSet1: {
            properties: {
                value1: {
                    type: 'string'
                },
                value2: {
                    type: 'number'
                },
                value3: {
                    type: 'string'
                }
            }
        },
        treeSet2: {
            properties: {
                complex1: {
                    properties: {
                        complexChild: {
                            properties: {
                                effect1: {
                                    properties: {
                                        enabled: {
                                            type: 'boolean'
                                        },
                                        value: {
                                            type: 'string'
                                        }
                                    }
                                },
                                effect2: {
                                    properties: {
                                        enabled: {
                                            type: 'boolean'
                                        },
                                        value: {
                                            type: 'string'
                                        }
                                    },
                                    path: 'imageEffect3'
                                },
                                effect3: {
                                    type: 'boolean',
                                    description: 'Use effect #3'
                                }
                            },
                            path: 'image.effects'
                        },

                        select: {
                            type: 'string',
                            enum: ['option1', 'option2', 'option3', 'option4', 'option5'],
                            display: {
                                labels: {option1: 'First option', option3: 'Third option'}
                            }
                        },
                        value: {
                            type: 'string',
                            maxLength: 10
                        }
                    },
                    required: ['select', 'value']
                },
                complex2: {
                    properties: {
                        range: {
                            type: 'number',
                            minimum: -10,
                            maximum: 10,
                            description: 'Range -10..10'
                        },
                        number: {
                            type: 'number',
                            minimum: 0,
                            maximum: 100,
                            description: 'Number 0..100'
                        },
                        boolean: {
                            type: 'boolean',
                            description: 'Yes or No'
                        }
                    },
                    required: ['range', 'number']
                },

                simple1: {
                    name: 'Importance',
                    type: 'string',
                    enum: ['low', 'normal', 'high', 'urgent'],
                    description: 'How important is this for you?',

                    path: 'treeSet2.general.simple1'
                },

                simple2: {
                    name: 'Priority level',
                    type: 'number',
                    minimum: 0,
                    maximum: 10,
                    description: 'Higher is faster!',
                    path: 'treeSet2.general.simple2'
                }
            }
        }
    }
};