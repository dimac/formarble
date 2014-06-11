window.schema = {
   "title": "How can we help?",
   "display": {
      "name": "tree"
   },
   "properties": {
      "treeSet1": {
         "_path": "treeSet1",
         "path": "treeSet1",
         "properties": {
            "value1": {
               "type": "string",
               "_path": "treeSet1.value1",
               "path": "treeSet1.value1",
               "display": {
                  "name": "input",
                  "type": "text"
               },
               "title": "Value 1",
               "order": 1002,
               "level": 2
            },
            "value2": {
               "type": "number",
               "_path": "treeSet1.value2",
               "path": "treeSet1.value2",
               "display": {
                  "name": "input/number",
                  "fallback": {
                     "name": "input",
                     "type": "number"
                  }
               },
               "title": "Value 2",
               "order": 1003,
               "level": 2
            },
            "value3": {
               "type": "string",
               "_path": "treeSet1.value3",
               "path": "treeSet1.value3",
               "display": {
                  "name": "input",
                  "type": "text"
               },
               "title": "Value 3",
               "order": 1004,
               "level": 2
            }
         },
         "display": {
            "name": "group"
         },
         "title": "Tree set 1",
         "order": 1001,
         "level": 1
      },
      "treeSet2": {
         "_path": "treeSet2",
         "path": "treeSet2",
         "properties": {
            "complex1": {
               "required": [
                  "select",
                  "value"
               ],
               "_path": "treeSet2.complex1",
               "path": "treeSet2.complex1",
               "properties": {
                  "select": {
                     "type": "string",
                     "enum": [
                        "option1",
                        "option2",
                        "option3",
                        "option4",
                        "option5"
                     ],
                     "display": {
                        "name": "select",
                        "options": [
                           {
                              "id": "option1",
                              "title": "First option"
                           },
                           {
                              "id": "option2",
                              "title": "Option 2"
                           },
                           {
                              "id": "option3",
                              "title": "Third option"
                           },
                           {
                              "id": "option4",
                              "title": "Option 4"
                           },
                           {
                              "id": "option5",
                              "title": "Option 5"
                           }
                        ],
                        "labels": {
                           "option1": "First option",
                           "option3": "Third option"
                        },
                        "required": true
                     },
                     "_path": "treeSet2.complex1.select",
                     "path": "treeSet2.complex1.select",
                     "title": "Select",
                     "order": 1007,
                     "level": 3
                  },
                  "value": {
                     "type": "string",
                     "maxLength": 10,
                     "_path": "treeSet2.complex1.value",
                     "path": "treeSet2.complex1.value",
                     "display": {
                        "name": "input",
                        "type": "text",
                        "maxlength": 10,
                        "required": true
                     },
                     "title": "Value",
                     "order": 1008,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "title": "Complex 1",
               "order": 1006,
               "level": 2
            },
            "complex2": {
               "required": [
                  "range",
                  "number"
               ],
               "_path": "treeSet2.complex2",
               "path": "treeSet2.complex2",
               "properties": {
                  "range": {
                     "type": "number",
                     "minimum": -10,
                     "maximum": 10,
                     "description": "Range -10..10",
                     "_path": "treeSet2.complex2.range",
                     "path": "treeSet2.complex2.range",
                     "display": {
                        "name": "input/number",
                        "max": 10,
                        "min": -10,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        },
                        "required": true
                     },
                     "title": "Range",
                     "order": 1010,
                     "level": 3
                  },
                  "number": {
                     "type": "number",
                     "minimum": 0,
                     "maximum": 100,
                     "description": "Number 0..100",
                     "_path": "treeSet2.complex2.number",
                     "path": "treeSet2.complex2.number",
                     "display": {
                        "name": "input/number",
                        "max": 100,
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        },
                        "required": true
                     },
                     "title": "Number",
                     "order": 1011,
                     "level": 3
                  },
                  "boolean": {
                     "type": "boolean",
                     "description": "Yes or No",
                     "_path": "treeSet2.complex2.boolean",
                     "path": "treeSet2.complex2.boolean",
                     "display": {
                        "name": "checkbox"
                     },
                     "title": "Boolean",
                     "order": 1012,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "title": "Complex 2",
               "order": 1009,
               "level": 2
            },
            "general": {
               "properties": {
                  "simple1": {
                     "name": "Importance",
                     "type": "string",
                     "enum": [
                        "low",
                        "normal",
                        "high",
                        "urgent"
                     ],
                     "description": "How important is this for you?",
                     "path": "treeSet2.general.simple1",
                     "_path": "treeSet2.simple1",
                     "display": {
                        "name": "select",
                        "options": [
                           {
                              "id": "low",
                              "title": "Low"
                           },
                           {
                              "id": "normal",
                              "title": "Normal"
                           },
                           {
                              "id": "high",
                              "title": "High"
                           },
                           {
                              "id": "urgent",
                              "title": "Urgent"
                           }
                        ]
                     },
                     "title": "Simple 1",
                     "order": 1014,
                     "level": 3
                  },
                  "simple2": {
                     "name": "Priority level",
                     "type": "number",
                     "minimum": 0,
                     "maximum": 10,
                     "description": "Higher is faster!",
                     "path": "treeSet2.general.simple2",
                     "_path": "treeSet2.simple2",
                     "display": {
                        "name": "input/number",
                        "max": 10,
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Simple 2",
                     "order": 1015,
                     "level": 3
                  }
               },
               "path": "treeSet2.general",
               "display": {
                  "name": "group"
               },
               "title": "General",
               "order": 1013,
               "level": 2
            }
         },
         "display": {
            "name": "group"
         },
         "title": "Tree set 2",
         "order": 1005,
         "level": 1
      },
      "image": {
         "properties": {
            "effects": {
               "path": "image.effects",
               "_path": "treeSet2.complex1.complexChild",
               "properties": {
                  "effect1": {
                     "_path": "treeSet2.complex1.complexChild.effect1",
                     "path": "image.effects.effect1",
                     "properties": {
                        "enabled": {
                           "type": "boolean",
                           "_path": "treeSet2.complex1.complexChild.effect1.enabled",
                           "path": "image.effects.effect1.enabled",
                           "display": {
                              "name": "checkbox"
                           },
                           "title": "Enabled",
                           "order": 1019,
                           "level": 4
                        },
                        "value": {
                           "type": "string",
                           "_path": "treeSet2.complex1.complexChild.effect1.value",
                           "path": "image.effects.effect1.value",
                           "display": {
                              "name": "input",
                              "type": "text"
                           },
                           "title": "Value",
                           "order": 1020,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "group"
                     },
                     "title": "Effect 1",
                     "order": 1018,
                     "level": 3
                  },
                  "effect3": {
                     "type": "boolean",
                     "description": "Use effect #3",
                     "_path": "treeSet2.complex1.complexChild.effect3",
                     "path": "image.effects.effect3",
                     "display": {
                        "name": "checkbox"
                     },
                     "title": "Effect 3",
                     "order": 1021,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "title": "Effects",
               "order": 1017,
               "level": 2
            }
         },
         "path": "image",
         "display": {
            "name": "group"
         },
         "title": "Image",
         "order": 1016,
         "level": 1
      },
      "imageEffect3": {
         "path": "imageEffect3",
         "_path": "treeSet2.complex1.complexChild.effect2",
         "properties": {
            "enabled": {
               "type": "boolean",
               "_path": "treeSet2.complex1.complexChild.effect2.enabled",
               "path": "imageEffect3.enabled",
               "display": {
                  "name": "checkbox"
               },
               "title": "Enabled",
               "order": 1023,
               "level": 2
            },
            "value": {
               "type": "string",
               "_path": "treeSet2.complex1.complexChild.effect2.value",
               "path": "imageEffect3.value",
               "display": {
                  "name": "input",
                  "type": "text"
               },
               "title": "Value",
               "order": 1024,
               "level": 2
            }
         },
         "display": {
            "name": "group"
         },
         "title": "Image effect 3",
         "order": 1022,
         "level": 1
      }
   },
   "path": "",
   "order": 1000,
   "level": 0
}
