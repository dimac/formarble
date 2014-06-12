window.schema = {
   "title": "Profile config",
   "display": {
      "name": "tree",
      "tree": [
         "image"
      ]
   },
   "properties": {
      "image": {
         "title": "Image settings",
         "display": {
            "name": "tree",
            "tree": [
               "_format",
               "scale",
               "crop"
            ]
         },
         "_id": "image",
         "_path": "image",
         "path": "image",
         "properties": {
            "_format": {
               "title": "Formats",
               "_id": "_format",
               "_path": "image._format",
               "path": "image._format",
               "properties": {
                  "jpg": {
                     "title": "JPEG options",
                     "_id": "jpg",
                     "_path": "image._format.jpg",
                     "path": "image._format.jpg",
                     "properties": {
                        "quality": {
                           "type": "number",
                           "minimum": 0,
                           "maximum": 100,
                           "display": {
                              "name": "input/range",
                              "max": 100,
                              "min": 0,
                              "fallback": {
                                 "name": "input",
                                 "type": "range"
                              }
                           },
                           "_id": "quality",
                           "_path": "image.quality",
                           "path": "image._format.jpg.quality",
                           "extend": "image.quality",
                           "title": "Quality",
                           "order": 1004,
                           "level": 4
                        },
                        "progressive": {
                           "type": "boolean",
                           "description": "Create progressive image",
                           "path": "image._format.jpg.progressive",
                           "_id": "progressive",
                           "_path": "image.progressive",
                           "display": {
                              "name": "checkbox"
                           },
                           "title": "Progressive",
                           "order": 1005,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "group"
                     },
                     "order": 1003,
                     "level": 3
                  },
                  "png": {
                     "title": "PNG options",
                     "path": "image._format.png",
                     "_id": "png",
                     "_path": "image.png",
                     "properties": {
                        "compression": {
                           "type": "number",
                           "description": "PNG compression",
                           "minimum": 0,
                           "maximum": 9,
                           "_id": "compression",
                           "_path": "image.png.compression",
                           "path": "image._format.png.compression",
                           "display": {
                              "name": "input/number",
                              "max": 9,
                              "min": 0,
                              "fallback": {
                                 "name": "input",
                                 "type": "number"
                              }
                           },
                           "title": "Compression",
                           "order": 1007,
                           "level": 4
                        },
                        "filtering": {
                           "type": "string",
                           "enum": [
                              "none",
                              "sub",
                              "up",
                              "average",
                              "paeth",
                              "adaptive"
                           ],
                           "_id": "filtering",
                           "_path": "image.png.filtering",
                           "path": "image._format.png.filtering",
                           "display": {
                              "name": "select",
                              "options": [
                                 {
                                    "id": "none",
                                    "title": "None"
                                 },
                                 {
                                    "id": "sub",
                                    "title": "Sub"
                                 },
                                 {
                                    "id": "up",
                                    "title": "Up"
                                 },
                                 {
                                    "id": "average",
                                    "title": "Average"
                                 },
                                 {
                                    "id": "paeth",
                                    "title": "Paeth"
                                 },
                                 {
                                    "id": "adaptive",
                                    "title": "Adaptive"
                                 }
                              ]
                           },
                           "title": "Filtering",
                           "order": 1008,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "group"
                     },
                     "order": 1006,
                     "level": 3
                  },
                  "webp": {
                     "title": "WebP options",
                     "path": "image._format.webp",
                     "_id": "webp",
                     "_path": "image.webp",
                     "properties": {
                        "quality": {
                           "type": "number",
                           "minimum": 0,
                           "maximum": 100,
                           "display": {
                              "name": "input/range",
                              "max": 100,
                              "min": 0,
                              "fallback": {
                                 "name": "input",
                                 "type": "range"
                              }
                           },
                           "_id": "quality",
                           "_path": "image.quality",
                           "path": "image._format.webp.quality",
                           "extend": "image.quality",
                           "title": "Quality",
                           "order": 1010,
                           "level": 4
                        },
                        "fallback": {
                           "type": "string",
                           "enum": [
                              "png",
                              "jpg"
                           ],
                           "display": {
                              "name": "radiolist",
                              "options": [
                                 {
                                    "id": "png",
                                    "title": "PNG"
                                 },
                                 {
                                    "id": "jpg",
                                    "title": "JPEG"
                                 }
                              ],
                              "labels": {
                                 "png": "PNG",
                                 "jpg": "JPEG"
                              }
                           },
                           "_id": "fallback",
                           "_path": "image.webp.fallback",
                           "path": "image._format.webp.fallback",
                           "title": "Fallback",
                           "order": 1011,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "group"
                     },
                     "order": 1009,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "order": 1002,
               "level": 2
            },
            "profile": {
               "type": "string",
               "_id": "profile",
               "_path": "image.profile",
               "path": "image.profile",
               "display": {
                  "name": "input",
                  "type": "text"
               },
               "title": "Profile",
               "order": 1012,
               "level": 2
            },
            "format": {
               "type": "string",
               "enum": [
                  "png",
                  "jpg",
                  "webp"
               ],
               "display": {
                  "name": "radiolist",
                  "options": [
                     {
                        "id": "png",
                        "title": "PNG"
                     },
                     {
                        "id": "jpg",
                        "title": "JPEG"
                     },
                     {
                        "id": "webp",
                        "title": "WebP"
                     }
                  ],
                  "labels": {
                     "png": "PNG",
                     "jpg": "JPEG",
                     "webp": "WebP"
                  }
               },
               "_id": "format",
               "_path": "image.format",
               "path": "image.format",
               "title": "Format",
               "order": 1013,
               "level": 2
            },
            "quality": {
               "type": "number",
               "minimum": 0,
               "maximum": 100,
               "display": {
                  "name": "input/range",
                  "max": 100,
                  "min": 0,
                  "fallback": {
                     "name": "input",
                     "type": "range"
                  }
               },
               "_id": "quality",
               "_path": "image.quality",
               "path": "image.quality",
               "title": "Quality",
               "order": 1014,
               "level": 2
            },
            "scale": {
               "description": "Scale the image to specified width and height",
               "_id": "scale",
               "_path": "image.scale",
               "path": "image.scale",
               "properties": {
                  "width": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Width",
                     "_id": "width",
                     "_path": "image.scale.width",
                     "path": "image.scale.width",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Width",
                     "order": 1016,
                     "level": 3
                  },
                  "height": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Height",
                     "_id": "height",
                     "_path": "image.scale.height",
                     "path": "image.scale.height",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Height",
                     "order": 1017,
                     "level": 3
                  },
                  "option": {
                     "type": "string",
                     "enum": [
                        "fit",
                        "fill",
                        "ignore",
                        "noup"
                     ],
                     "_id": "option",
                     "_path": "image.scale.option",
                     "path": "image.scale.option",
                     "display": {
                        "name": "select",
                        "options": [
                           {
                              "id": "fit",
                              "title": "Fit"
                           },
                           {
                              "id": "fill",
                              "title": "Fill"
                           },
                           {
                              "id": "ignore",
                              "title": "Ignore"
                           },
                           {
                              "id": "noup",
                              "title": "Noup"
                           }
                        ]
                     },
                     "title": "Option",
                     "order": 1018,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "title": "Scale",
               "order": 1015,
               "level": 2
            },
            "crop": {
               "description": "Crop the image",
               "_id": "crop",
               "_path": "image.crop",
               "path": "image.crop",
               "properties": {
                  "width": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Width",
                     "_id": "width",
                     "_path": "image.crop.width",
                     "path": "image.crop.width",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Width",
                     "order": 1020,
                     "level": 3
                  },
                  "height": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Height",
                     "_id": "height",
                     "_path": "image.crop.height",
                     "path": "image.crop.height",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Height",
                     "order": 1021,
                     "level": 3
                  },
                  "x": {
                     "type": "number",
                     "minimum": 0,
                     "description": "X offset",
                     "_id": "x",
                     "_path": "image.crop.x",
                     "path": "image.crop.x",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "X",
                     "order": 1022,
                     "level": 3
                  },
                  "y": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Y offset",
                     "_id": "y",
                     "_path": "image.crop.y",
                     "path": "image.crop.y",
                     "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                           "name": "input",
                           "type": "number"
                        }
                     },
                     "title": "Y",
                     "order": 1023,
                     "level": 3
                  }
               },
               "display": {
                  "name": "group"
               },
               "title": "Crop",
               "order": 1019,
               "level": 2
            }
         },
         "order": 1001,
         "level": 1
      }
   },
   "path": "",
   "order": 1000,
   "level": 0
}
