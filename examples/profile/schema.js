window.schema = {
  "title": "Profile",
  "display": {
    "name": "fm-tree",
    "tree": [
      "image",
      "spin"
    ]
  },
  "properties": {
    "image": {
      "title": "Image settings",
      "display": {
        "name": "fm-tree",
        "tree": [
          "scale",
          "crop",
          "text",
          "effects"
        ]
      },
      "_id": "image",
      "_path": "image",
      "path": "image",
      "properties": {
        "profile": {
          "type": "string",
          "_id": "profile",
          "_path": "image.profile",
          "path": "image.profile",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Profile",
          "_order": 1002,
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
            "name": "fm-radio-list",
            "options": [
              {
                "id": "png",
                "title": "PNG"
              },
              {
                "id": "jpg",
                "title": "JPG"
              },
              {
                "id": "webp",
                "title": "WebP"
              }
            ],
            "labels": {
              "png": "PNG",
              "webp": "WebP",
              "jpg": "JPG"
            }
          },
          "_id": "format",
          "_path": "image.format",
          "path": "image.format",
          "title": "Format",
          "_order": 1003,
          "level": 2
        },
        "scale": {
          "description": "Scale the image to specified width and height",
          "additionalProperties": false,
          "title": "Scaling options",
          "_id": "scale",
          "_path": "image.scale",
          "path": "image.scale",
          "properties": {
            "width": {
              "oneOf": [
                {
                  "type": "number",
                  "minimum": 0
                },
                {
                  "type": "string",
                  "format": "Percentage"
                }
              ],
              "description": "Width",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                "hint": "[Number] or [Number]px or [Number]%"
              },
              "_id": "width",
              "_path": "image.scale.width",
              "path": "image.scale.width",
              "title": "Width",
              "_order": 1005,
              "level": 3
            },
            "height": {
              "oneOf": [
                {
                  "type": "number",
                  "minimum": 0
                },
                {
                  "type": "string",
                  "format": "Percentage"
                }
              ],
              "description": "Height",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                "hint": "[Number] or [Number]px or [Number]%"
              },
              "_id": "height",
              "_path": "image.scale.height",
              "path": "image.scale.height",
              "title": "Height",
              "_order": 1006,
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
              "display": {
                "name": "fm-select",
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
                    "title": "Ignore aspect ratio"
                  },
                  {
                    "id": "noup",
                    "title": "No upscale"
                  }
                ],
                "labels": {
                  "ignore": "Ignore aspect ratio",
                  "noup": "No upscale"
                }
              },
              "_id": "option",
              "_path": "image.scale.option",
              "path": "image.scale.option",
              "title": "Option",
              "_order": 1007,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "_order": 1004,
          "level": 2
        },
        "crop": {
          "description": "Crop the image",
          "additionalProperties": false,
          "title": "Crop options",
          "_id": "crop",
          "_path": "image.crop",
          "path": "image.crop",
          "properties": {
            "width": {
              "oneOf": [
                {
                  "type": "number",
                  "minimum": 0
                },
                {
                  "type": "string",
                  "format": "Percentage"
                }
              ],
              "description": "Width",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                "hint": "[Number] or [Number]px or [Number]%"
              },
              "_id": "width",
              "_path": "image.crop.width",
              "path": "image.crop.width",
              "title": "Width",
              "_order": 1009,
              "level": 3
            },
            "height": {
              "oneOf": [
                {
                  "type": "number",
                  "minimum": 0
                },
                {
                  "type": "string",
                  "format": "Percentage"
                }
              ],
              "description": "Height",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                "hint": "[Number] or [Number]px or [Number]%"
              },
              "_id": "height",
              "_path": "image.crop.height",
              "path": "image.crop.height",
              "title": "Height",
              "_order": 1010,
              "level": 3
            },
            "x": {
              "oneOf": [
                {
                  "type": "number"
                },
                {
                  "type": "string",
                  "format": "Percentage"
                },
                {
                  "type": "string",
                  "enum": [
                    "center"
                  ]
                }
              ],
              "description": "X offset",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                "hint": "(+/-) 0-100% or 0-9999px or center"
              },
              "_id": "x",
              "_path": "image.crop.x",
              "path": "image.crop.x",
              "title": "X",
              "_order": 1011,
              "level": 3
            },
            "y": {
              "oneOf": [
                {
                  "type": "number"
                },
                {
                  "type": "string",
                  "format": "Percentage"
                },
                {
                  "type": "string",
                  "enum": [
                    "center"
                  ]
                }
              ],
              "description": "Y offset",
              "display": {
                "name": "fm-input",
                "type": "text",
                "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                "hint": "(+/-) 0-100% or 0-9999px or center"
              },
              "_id": "y",
              "_path": "image.crop.y",
              "path": "image.crop.y",
              "title": "Y",
              "_order": 1012,
              "level": 3
            },
            "thumbnail": {
              "type": "number",
              "minimum": 1,
              "maximum": 256,
              "description": "Create square thumbnail of specified size",
              "path": "image.crop.thumbnail",
              "_id": "thumbnail",
              "_path": "image.thumbnail",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 256,
                "min": 1
              },
              "title": "Thumbnail",
              "_order": 1013,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "_order": 1008,
          "level": 2
        },
        "effects": {
          "properties": {
            "rotate": {
              "type": "number",
              "description": "Rotate image (degrees)",
              "minimum": -180,
              "maximum": 180,
              "path": "image.effects.rotate",
              "_id": "rotate",
              "_path": "image.rotate",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 180,
                "min": -180
              },
              "title": "Rotate",
              "_order": 1015,
              "level": 3
            },
            "brightness": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "path": "image.effects.brightness",
              "order": 1,
              "_id": "brightness",
              "_path": "image.brightness",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Brightness",
              "_order": 1016,
              "level": 3
            },
            "contrast": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "path": "image.effects.contrast",
              "order": 2,
              "_id": "contrast",
              "_path": "image.contrast",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Contrast",
              "_order": 1017,
              "level": 3
            },
            "exposure": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "path": "image.effects.exposure",
              "order": 3,
              "_id": "exposure",
              "_path": "image.exposure",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Exposure",
              "_order": 1018,
              "level": 3
            },
            "grayscale": {
              "type": "boolean",
              "description": "Transform the image to black and white",
              "path": "image.effects.grayscale",
              "order": 4,
              "_id": "grayscale",
              "_path": "image.grayscale",
              "display": {
                "name": "fm-checkbox"
              },
              "title": "Grayscale",
              "_order": 1019,
              "level": 3
            },
            "blur": {
              "type": "number",
              "description": "Apply a blur effect to the image",
              "path": "image.effects.blur",
              "order": 6,
              "_id": "blur",
              "_path": "image.blur",
              "display": {
                "name": "fm-input",
                "type": "number"
              },
              "title": "Blur",
              "_order": 1020,
              "level": 3
            },
            "tiltshift": {
              "type": "boolean",
              "description": "Apply a tilt-shift effect to the image",
              "path": "image.effects.tiltshift",
              "_id": "tiltshift",
              "_path": "image.tiltshift",
              "display": {
                "name": "fm-checkbox"
              },
              "title": "Tiltshift",
              "_order": 1021,
              "level": 3
            },
            "frame": {
              "additionalProperties": false,
              "required": [
                "style"
              ],
              "path": "image.effects.frame",
              "_id": "frame",
              "_path": "image.frame",
              "properties": {
                "style": {
                  "type": "string",
                  "enum": [
                    "simple",
                    "mirror",
                    "edge",
                    "deckled",
                    "none"
                  ],
                  "_id": "style",
                  "_path": "image.frame.style",
                  "path": "image.effects.frame.style",
                  "display": {
                    "name": "fm-select",
                    "options": [
                      {
                        "id": "simple",
                        "title": "Simple"
                      },
                      {
                        "id": "mirror",
                        "title": "Mirror"
                      },
                      {
                        "id": "edge",
                        "title": "Edge"
                      },
                      {
                        "id": "deckled",
                        "title": "Deckled"
                      },
                      {
                        "id": "none",
                        "title": "None"
                      }
                    ],
                    "required": true
                  },
                  "title": "Style",
                  "_order": 1023,
                  "level": 4
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "_id": "color",
                  "_path": "image.frame.color",
                  "path": "image.effects.frame.color",
                  "display": {
                    "name": "fm-input",
                    "type": "color"
                  },
                  "title": "Color",
                  "_order": 1024,
                  "level": 4
                },
                "width": {
                  "type": "number",
                  "_id": "width",
                  "_path": "image.frame.width",
                  "path": "image.effects.frame.width",
                  "display": {
                    "name": "fm-input",
                    "type": "number"
                  },
                  "title": "Width",
                  "_order": 1025,
                  "level": 4
                },
                "rim": {
                  "_id": "rim",
                  "_path": "image.frame.rim",
                  "path": "image.effects.frame.rim",
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "_id": "color",
                      "_path": "image.frame.rim.color",
                      "path": "image.effects.frame.rim.color",
                      "display": {
                        "name": "fm-input",
                        "type": "color"
                      },
                      "title": "Color",
                      "_order": 1027,
                      "level": 5
                    },
                    "width": {
                      "type": "number",
                      "_id": "width",
                      "_path": "image.frame.rim.width",
                      "path": "image.effects.frame.rim.width",
                      "display": {
                        "name": "fm-input",
                        "type": "number"
                      },
                      "title": "Width",
                      "_order": 1028,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Rim",
                  "_order": 1026,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Frame",
              "_order": 1022,
              "level": 3
            },
            "colortone": {
              "type": "string",
              "enum": [
                "sepia",
                "warm",
                "cold",
                "sunset",
                "purpletan",
                "texas",
                "none"
              ],
              "path": "image.effects.colortone",
              "order": 5,
              "_id": "colortone",
              "_path": "image.colortone",
              "display": {
                "name": "fm-select",
                "options": [
                  {
                    "id": "sepia",
                    "title": "Sepia"
                  },
                  {
                    "id": "warm",
                    "title": "Warm"
                  },
                  {
                    "id": "cold",
                    "title": "Cold"
                  },
                  {
                    "id": "sunset",
                    "title": "Sunset"
                  },
                  {
                    "id": "purpletan",
                    "title": "Purpletan"
                  },
                  {
                    "id": "texas",
                    "title": "Texas"
                  },
                  {
                    "id": "none",
                    "title": "None"
                  }
                ]
              },
              "title": "Colortone",
              "_order": 1029,
              "level": 3
            },
            "vignette": {
              "additionalProperties": false,
              "path": "image.effects.vignette",
              "_id": "vignette",
              "_path": "image.vignette",
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "_id": "color",
                  "_path": "image.vignette.color",
                  "path": "image.effects.vignette.color",
                  "display": {
                    "name": "fm-input",
                    "type": "color"
                  },
                  "title": "Color",
                  "_order": 1031,
                  "level": 4
                },
                "value": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 1,
                  "_id": "value",
                  "_path": "image.vignette.value",
                  "path": "image.effects.vignette.value",
                  "display": {
                    "name": "fm-input",
                    "type": "number",
                    "max": 1,
                    "min": 0
                  },
                  "title": "Value",
                  "_order": 1032,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Vignette",
              "_order": 1030,
              "level": 3
            }
          },
          "_id": "effects",
          "path": "image.effects",
          "display": {
            "name": "fm-input-group"
          },
          "title": "Effects",
          "_order": 1014,
          "level": 2
        },
        "jpeg": {
          "properties": {
            "subsampling": {
              "type": "string",
              "enum": [
                "4:4:4",
                "4:2:2",
                "4:2:0"
              ],
              "display": {
                "name": "fm-radio-list",
                "options": [
                  {
                    "id": "4:4:4",
                    "title": "4:4:4 - Best quality"
                  },
                  {
                    "id": "4:2:2",
                    "title": "4:2:2"
                  },
                  {
                    "id": "4:2:0",
                    "title": "4:2:0"
                  }
                ],
                "labels": {
                  "4:4:4": "4:4:4 - Best quality"
                }
              },
              "path": "image.jpeg.subsampling",
              "_id": "subsampling",
              "_path": "image.subsampling",
              "title": "Subsampling",
              "_order": 1034,
              "level": 3
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "fm-input-range",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "path": "image.jpeg.quality",
              "_id": "quality",
              "_path": "image.quality",
              "title": "Quality",
              "_order": 1035,
              "level": 3
            },
            "progressive": {
              "type": "boolean",
              "description": "Create progressive image",
              "path": "image.jpeg.progressive",
              "_id": "progressive",
              "_path": "image.progressive",
              "display": {
                "name": "fm-checkbox"
              },
              "title": "Progressive",
              "_order": 1036,
              "level": 3
            }
          },
          "_id": "jpeg",
          "path": "image.jpeg",
          "display": {
            "name": "fm-input-group"
          },
          "title": "Jpeg",
          "_order": 1033,
          "level": 2
        },
        "png": {
          "additionalProperties": false,
          "_id": "png",
          "_path": "image.png",
          "path": "image.png",
          "properties": {
            "compression": {
              "type": "number",
              "description": "PNG compression",
              "minimum": 0,
              "maximum": 9,
              "_id": "compression",
              "_path": "image.png.compression",
              "path": "image.png.compression",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 9,
                "min": 0
              },
              "title": "Compression",
              "_order": 1038,
              "level": 3
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
              "path": "image.png.filtering",
              "display": {
                "name": "fm-select",
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
              "_order": 1039,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "title": "Png",
          "_order": 1037,
          "level": 2
        },
        "webp": {
          "additionalProperties": false,
          "_id": "webp",
          "_path": "image.webp",
          "path": "image.webp",
          "properties": {
            "fallback": {
              "type": "string",
              "enum": [
                "png",
                "jpg"
              ],
              "_id": "fallback",
              "_path": "image.webp.fallback",
              "path": "image.webp.fallback",
              "display": {
                "name": "fm-radio-list",
                "options": [
                  {
                    "id": "png",
                    "title": "Png"
                  },
                  {
                    "id": "jpg",
                    "title": "Jpg"
                  }
                ]
              },
              "title": "Fallback",
              "_order": 1041,
              "level": 3
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "fm-input-range",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "path": "image.webp.quality",
              "_id": "quality",
              "_path": "image.quality",
              "extend": "image.quality",
              "title": "Quality",
              "_order": 1042,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "title": "Webp",
          "_order": 1040,
          "level": 2
        },
        "text": {
          "required": [
            "text"
          ],
          "additionalProperties": false,
          "title": "Text overlay",
          "_id": "text",
          "_path": "image.text",
          "path": "image.text",
          "properties": {
            "style": {
              "type": "string",
              "enum": [
                "simple",
                "soft",
                "none"
              ],
              "_id": "style",
              "_path": "image.text.style",
              "path": "image.text.style",
              "display": {
                "name": "fm-radio-list",
                "options": [
                  {
                    "id": "simple",
                    "title": "Simple"
                  },
                  {
                    "id": "soft",
                    "title": "Soft"
                  },
                  {
                    "id": "none",
                    "title": "None"
                  }
                ]
              },
              "title": "Style",
              "_order": 1044,
              "level": 3
            },
            "font": {
              "_id": "font",
              "_path": "image.text.font",
              "path": "image.text.font",
              "properties": {
                "family": {
                  "type": "string",
                  "_id": "family",
                  "_path": "image.text.font.family",
                  "path": "image.text.font.family",
                  "display": {
                    "name": "fm-input",
                    "type": "text"
                  },
                  "title": "Family",
                  "_order": 1046,
                  "level": 4
                },
                "weight": {
                  "type": "string",
                  "enum": [
                    "light",
                    "normal",
                    "semi-bold",
                    "bold",
                    "extra-bold",
                    "300",
                    "400",
                    "600",
                    "700",
                    "800"
                  ],
                  "_id": "weight",
                  "_path": "image.text.font.weight",
                  "path": "image.text.font.weight",
                  "display": {
                    "name": "fm-select",
                    "options": [
                      {
                        "id": "light",
                        "title": "Light"
                      },
                      {
                        "id": "normal",
                        "title": "Normal"
                      },
                      {
                        "id": "semi-bold",
                        "title": "Semi bold"
                      },
                      {
                        "id": "bold",
                        "title": "Bold"
                      },
                      {
                        "id": "extra-bold",
                        "title": "Extra bold"
                      },
                      {
                        "id": "300",
                        "title": "300"
                      },
                      {
                        "id": "400",
                        "title": "400"
                      },
                      {
                        "id": "600",
                        "title": "600"
                      },
                      {
                        "id": "700",
                        "title": "700"
                      },
                      {
                        "id": "800",
                        "title": "800"
                      }
                    ]
                  },
                  "title": "Weight",
                  "_order": 1047,
                  "level": 4
                },
                "style": {
                  "type": "string",
                  "enum": [
                    "normal",
                    "italic"
                  ],
                  "_id": "style",
                  "_path": "image.text.font.style",
                  "path": "image.text.font.style",
                  "display": {
                    "name": "fm-radio-list",
                    "options": [
                      {
                        "id": "normal",
                        "title": "Normal"
                      },
                      {
                        "id": "italic",
                        "title": "Italic"
                      }
                    ]
                  },
                  "title": "Style",
                  "_order": 1048,
                  "level": 4
                },
                "size": {
                  "oneOf": [
                    {
                      "type": "number",
                      "minimum": 0
                    },
                    {
                      "type": "string",
                      "format": "Percentage"
                    }
                  ],
                  "display": {
                    "name": "fm-input",
                    "type": "text",
                    "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                    "hint": "[Number] or [Number]px or [Number]%"
                  },
                  "_id": "size",
                  "_path": "image.text.font.size",
                  "path": "image.text.font.size",
                  "title": "Size",
                  "_order": 1049,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Font",
              "_order": 1045,
              "level": 3
            },
            "text": {
              "type": "string",
              "maxLength": 100,
              "order": 1,
              "_id": "text",
              "_path": "image.text.text",
              "path": "image.text.text",
              "display": {
                "name": "fm-input",
                "type": "text",
                "maxlength": 100,
                "required": true
              },
              "title": "Text",
              "_order": 1050,
              "level": 3
            },
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "image.text.color",
              "path": "image.text.color",
              "display": {
                "name": "fm-input",
                "type": "color"
              },
              "title": "Color",
              "_order": 1051,
              "level": 3
            },
            "opacity": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "_id": "opacity",
              "_path": "image.text.opacity",
              "path": "image.text.opacity",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Opacity",
              "_order": 1052,
              "level": 3
            },
            "background": {
              "_id": "background",
              "_path": "image.text.background",
              "path": "image.text.background",
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "_id": "color",
                  "_path": "image.text.background.color",
                  "path": "image.text.background.color",
                  "display": {
                    "name": "fm-input",
                    "type": "color"
                  },
                  "title": "Color",
                  "_order": 1054,
                  "level": 4
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "fm-input-range",
                    "type": "number",
                    "max": 100,
                    "min": 0
                  },
                  "_id": "opacity",
                  "_path": "image.text.background.opacity",
                  "path": "image.text.background.opacity",
                  "title": "Opacity",
                  "_order": 1055,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Background",
              "_order": 1053,
              "level": 3
            },
            "outline": {
              "_id": "outline",
              "_path": "image.text.outline",
              "path": "image.text.outline",
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "_id": "color",
                  "_path": "image.text.outline.color",
                  "path": "image.text.outline.color",
                  "display": {
                    "name": "fm-input",
                    "type": "color"
                  },
                  "title": "Color",
                  "_order": 1057,
                  "level": 4
                },
                "width": {
                  "type": "number",
                  "minimum": 0,
                  "_id": "width",
                  "_path": "image.text.outline.width",
                  "path": "image.text.outline.width",
                  "display": {
                    "name": "fm-input",
                    "type": "number",
                    "min": 0
                  },
                  "title": "Width",
                  "_order": 1058,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Outline",
              "_order": 1056,
              "level": 3
            },
            "size": {
              "type": "string",
              "format": "Percentage",
              "_id": "size",
              "_path": "image.text.size",
              "path": "image.text.size",
              "display": {
                "name": "fm-input",
                "type": "text"
              },
              "title": "Size",
              "_order": 1059,
              "level": 3
            },
            "position": {
              "type": "string",
              "enum": [
                "north",
                "northeast",
                "northwest",
                "center",
                "south",
                "southeast",
                "southwest",
                "east",
                "west"
              ],
              "_id": "position",
              "_path": "image.text.position",
              "path": "image.text.position",
              "display": {
                "name": "fm-select",
                "options": [
                  {
                    "id": "north",
                    "title": "North"
                  },
                  {
                    "id": "northeast",
                    "title": "Northeast"
                  },
                  {
                    "id": "northwest",
                    "title": "Northwest"
                  },
                  {
                    "id": "center",
                    "title": "Center"
                  },
                  {
                    "id": "south",
                    "title": "South"
                  },
                  {
                    "id": "southeast",
                    "title": "Southeast"
                  },
                  {
                    "id": "southwest",
                    "title": "Southwest"
                  },
                  {
                    "id": "east",
                    "title": "East"
                  },
                  {
                    "id": "west",
                    "title": "West"
                  }
                ]
              },
              "title": "Position",
              "_order": 1060,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "_order": 1043,
          "level": 2
        }
      },
      "_order": 1001,
      "level": 1
    },
    "spin": {
      "title": "Spin settings",
      "display": {
        "name": "fm-tree",
        "tree": [
          "images"
        ]
      },
      "_id": "spin",
      "_path": "spin",
      "path": "spin",
      "properties": {
        "images": {
          "additionalProperties": false,
          "title": "Images",
          "display": {
            "name": "fm-tree",
            "tree": [
              "main",
              "zoom",
              "fullscreen"
            ],
            "open": true
          },
          "_id": "images",
          "_path": "spin.images",
          "path": "spin.images",
          "properties": {
            "main": {
              "title": "Main image",
              "display": {
                "name": "fm-tree",
                "tree": [
                  "scale",
                  "crop",
                  "text",
                  "effects"
                ]
              },
              "_id": "main",
              "_path": "spin.images.main",
              "path": "spin.images.main",
              "properties": {
                "profile": {
                  "type": "string",
                  "_id": "profile",
                  "_path": "spin.images.main.profile",
                  "path": "spin.images.main.profile",
                  "display": {
                    "name": "fm-input",
                    "type": "text"
                  },
                  "title": "Profile",
                  "_order": 1064,
                  "level": 4
                },
                "format": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg",
                    "webp"
                  ],
                  "display": {
                    "name": "fm-radio-list",
                    "options": [
                      {
                        "id": "png",
                        "title": "PNG"
                      },
                      {
                        "id": "jpg",
                        "title": "JPG"
                      },
                      {
                        "id": "webp",
                        "title": "WebP"
                      }
                    ],
                    "labels": {
                      "png": "PNG",
                      "webp": "WebP",
                      "jpg": "JPG"
                    }
                  },
                  "_id": "format",
                  "_path": "spin.images.main.format",
                  "path": "spin.images.main.format",
                  "title": "Format",
                  "_order": 1065,
                  "level": 4
                },
                "scale": {
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "title": "Scaling options",
                  "_id": "scale",
                  "_path": "spin.images.main.scale",
                  "path": "spin.images.main.scale",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.main.scale.width",
                      "path": "spin.images.main.scale.width",
                      "title": "Width",
                      "_order": 1067,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.main.scale.height",
                      "path": "spin.images.main.scale.height",
                      "title": "Height",
                      "_order": 1068,
                      "level": 5
                    },
                    "option": {
                      "type": "string",
                      "enum": [
                        "fit",
                        "fill",
                        "ignore",
                        "noup"
                      ],
                      "display": {
                        "name": "fm-select",
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
                            "title": "Ignore aspect ratio"
                          },
                          {
                            "id": "noup",
                            "title": "No upscale"
                          }
                        ],
                        "labels": {
                          "ignore": "Ignore aspect ratio",
                          "noup": "No upscale"
                        }
                      },
                      "_id": "option",
                      "_path": "spin.images.main.scale.option",
                      "path": "spin.images.main.scale.option",
                      "title": "Option",
                      "_order": 1069,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1066,
                  "level": 4
                },
                "crop": {
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "title": "Crop options",
                  "_id": "crop",
                  "_path": "spin.images.main.crop",
                  "path": "spin.images.main.crop",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.main.crop.width",
                      "path": "spin.images.main.crop.width",
                      "title": "Width",
                      "_order": 1071,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.main.crop.height",
                      "path": "spin.images.main.crop.height",
                      "title": "Height",
                      "_order": 1072,
                      "level": 5
                    },
                    "x": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "X offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "x",
                      "_path": "spin.images.main.crop.x",
                      "path": "spin.images.main.crop.x",
                      "title": "X",
                      "_order": 1073,
                      "level": 5
                    },
                    "y": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "Y offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "y",
                      "_path": "spin.images.main.crop.y",
                      "path": "spin.images.main.crop.y",
                      "title": "Y",
                      "_order": 1074,
                      "level": 5
                    },
                    "thumbnail": {
                      "type": "number",
                      "minimum": 1,
                      "maximum": 256,
                      "description": "Create square thumbnail of specified size",
                      "path": "spin.images.main.crop.thumbnail",
                      "_id": "thumbnail",
                      "_path": "spin.images.main.thumbnail",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 256,
                        "min": 1
                      },
                      "title": "Thumbnail",
                      "_order": 1075,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1070,
                  "level": 4
                },
                "effects": {
                  "properties": {
                    "rotate": {
                      "type": "number",
                      "description": "Rotate image (degrees)",
                      "minimum": -180,
                      "maximum": 180,
                      "path": "spin.images.main.effects.rotate",
                      "_id": "rotate",
                      "_path": "spin.images.main.rotate",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 180,
                        "min": -180
                      },
                      "title": "Rotate",
                      "_order": 1077,
                      "level": 5
                    },
                    "brightness": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.main.effects.brightness",
                      "order": 1,
                      "_id": "brightness",
                      "_path": "spin.images.main.brightness",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Brightness",
                      "_order": 1078,
                      "level": 5
                    },
                    "contrast": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.main.effects.contrast",
                      "order": 2,
                      "_id": "contrast",
                      "_path": "spin.images.main.contrast",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Contrast",
                      "_order": 1079,
                      "level": 5
                    },
                    "exposure": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.main.effects.exposure",
                      "order": 3,
                      "_id": "exposure",
                      "_path": "spin.images.main.exposure",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Exposure",
                      "_order": 1080,
                      "level": 5
                    },
                    "grayscale": {
                      "type": "boolean",
                      "description": "Transform the image to black and white",
                      "path": "spin.images.main.effects.grayscale",
                      "order": 4,
                      "_id": "grayscale",
                      "_path": "spin.images.main.grayscale",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Grayscale",
                      "_order": 1081,
                      "level": 5
                    },
                    "blur": {
                      "type": "number",
                      "description": "Apply a blur effect to the image",
                      "path": "spin.images.main.effects.blur",
                      "order": 6,
                      "_id": "blur",
                      "_path": "spin.images.main.blur",
                      "display": {
                        "name": "fm-input",
                        "type": "number"
                      },
                      "title": "Blur",
                      "_order": 1082,
                      "level": 5
                    },
                    "tiltshift": {
                      "type": "boolean",
                      "description": "Apply a tilt-shift effect to the image",
                      "path": "spin.images.main.effects.tiltshift",
                      "_id": "tiltshift",
                      "_path": "spin.images.main.tiltshift",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Tiltshift",
                      "_order": 1083,
                      "level": 5
                    },
                    "frame": {
                      "additionalProperties": false,
                      "required": [
                        "style"
                      ],
                      "path": "spin.images.main.effects.frame",
                      "_id": "frame",
                      "_path": "spin.images.main.frame",
                      "properties": {
                        "style": {
                          "type": "string",
                          "enum": [
                            "simple",
                            "mirror",
                            "edge",
                            "deckled",
                            "none"
                          ],
                          "_id": "style",
                          "_path": "spin.images.main.frame.style",
                          "path": "spin.images.main.effects.frame.style",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "simple",
                                "title": "Simple"
                              },
                              {
                                "id": "mirror",
                                "title": "Mirror"
                              },
                              {
                                "id": "edge",
                                "title": "Edge"
                              },
                              {
                                "id": "deckled",
                                "title": "Deckled"
                              },
                              {
                                "id": "none",
                                "title": "None"
                              }
                            ],
                            "required": true
                          },
                          "title": "Style",
                          "_order": 1085,
                          "level": 6
                        },
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.main.frame.color",
                          "path": "spin.images.main.effects.frame.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1086,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "_id": "width",
                          "_path": "spin.images.main.frame.width",
                          "path": "spin.images.main.effects.frame.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number"
                          },
                          "title": "Width",
                          "_order": 1087,
                          "level": 6
                        },
                        "rim": {
                          "_id": "rim",
                          "_path": "spin.images.main.frame.rim",
                          "path": "spin.images.main.effects.frame.rim",
                          "properties": {
                            "color": {
                              "type": "string",
                              "format": "Color",
                              "_id": "color",
                              "_path": "spin.images.main.frame.rim.color",
                              "path": "spin.images.main.effects.frame.rim.color",
                              "display": {
                                "name": "fm-input",
                                "type": "color"
                              },
                              "title": "Color",
                              "_order": 1089,
                              "level": 7
                            },
                            "width": {
                              "type": "number",
                              "_id": "width",
                              "_path": "spin.images.main.frame.rim.width",
                              "path": "spin.images.main.effects.frame.rim.width",
                              "display": {
                                "name": "fm-input",
                                "type": "number"
                              },
                              "title": "Width",
                              "_order": 1090,
                              "level": 7
                            }
                          },
                          "display": {
                            "name": "fm-input-group"
                          },
                          "title": "Rim",
                          "_order": 1088,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Frame",
                      "_order": 1084,
                      "level": 5
                    },
                    "colortone": {
                      "type": "string",
                      "enum": [
                        "sepia",
                        "warm",
                        "cold",
                        "sunset",
                        "purpletan",
                        "texas",
                        "none"
                      ],
                      "path": "spin.images.main.effects.colortone",
                      "order": 5,
                      "_id": "colortone",
                      "_path": "spin.images.main.colortone",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "sepia",
                            "title": "Sepia"
                          },
                          {
                            "id": "warm",
                            "title": "Warm"
                          },
                          {
                            "id": "cold",
                            "title": "Cold"
                          },
                          {
                            "id": "sunset",
                            "title": "Sunset"
                          },
                          {
                            "id": "purpletan",
                            "title": "Purpletan"
                          },
                          {
                            "id": "texas",
                            "title": "Texas"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Colortone",
                      "_order": 1091,
                      "level": 5
                    },
                    "vignette": {
                      "additionalProperties": false,
                      "path": "spin.images.main.effects.vignette",
                      "_id": "vignette",
                      "_path": "spin.images.main.vignette",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.main.vignette.color",
                          "path": "spin.images.main.effects.vignette.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1093,
                          "level": 6
                        },
                        "value": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 1,
                          "_id": "value",
                          "_path": "spin.images.main.vignette.value",
                          "path": "spin.images.main.effects.vignette.value",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "max": 1,
                            "min": 0
                          },
                          "title": "Value",
                          "_order": 1094,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Vignette",
                      "_order": 1092,
                      "level": 5
                    }
                  },
                  "_id": "effects",
                  "path": "spin.images.main.effects",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Effects",
                  "_order": 1076,
                  "level": 4
                },
                "jpeg": {
                  "properties": {
                    "subsampling": {
                      "type": "string",
                      "enum": [
                        "4:4:4",
                        "4:2:2",
                        "4:2:0"
                      ],
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "4:4:4",
                            "title": "4:4:4 - Best quality"
                          },
                          {
                            "id": "4:2:2",
                            "title": "4:2:2"
                          },
                          {
                            "id": "4:2:0",
                            "title": "4:2:0"
                          }
                        ],
                        "labels": {
                          "4:4:4": "4:4:4 - Best quality"
                        }
                      },
                      "path": "spin.images.main.jpeg.subsampling",
                      "_id": "subsampling",
                      "_path": "spin.images.main.subsampling",
                      "title": "Subsampling",
                      "_order": 1096,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.main.jpeg.quality",
                      "_id": "quality",
                      "_path": "spin.images.main.quality",
                      "title": "Quality",
                      "_order": 1097,
                      "level": 5
                    },
                    "progressive": {
                      "type": "boolean",
                      "description": "Create progressive image",
                      "path": "spin.images.main.jpeg.progressive",
                      "_id": "progressive",
                      "_path": "spin.images.main.progressive",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Progressive",
                      "_order": 1098,
                      "level": 5
                    }
                  },
                  "_id": "jpeg",
                  "path": "spin.images.main.jpeg",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Jpeg",
                  "_order": 1095,
                  "level": 4
                },
                "png": {
                  "additionalProperties": false,
                  "_id": "png",
                  "_path": "spin.images.main.png",
                  "path": "spin.images.main.png",
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
                      "_id": "compression",
                      "_path": "spin.images.main.png.compression",
                      "path": "spin.images.main.png.compression",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 9,
                        "min": 0
                      },
                      "title": "Compression",
                      "_order": 1100,
                      "level": 5
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
                      "_path": "spin.images.main.png.filtering",
                      "path": "spin.images.main.png.filtering",
                      "display": {
                        "name": "fm-select",
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
                      "_order": 1101,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Png",
                  "_order": 1099,
                  "level": 4
                },
                "webp": {
                  "additionalProperties": false,
                  "_id": "webp",
                  "_path": "spin.images.main.webp",
                  "path": "spin.images.main.webp",
                  "properties": {
                    "fallback": {
                      "type": "string",
                      "enum": [
                        "png",
                        "jpg"
                      ],
                      "_id": "fallback",
                      "_path": "spin.images.main.webp.fallback",
                      "path": "spin.images.main.webp.fallback",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "png",
                            "title": "Png"
                          },
                          {
                            "id": "jpg",
                            "title": "Jpg"
                          }
                        ]
                      },
                      "title": "Fallback",
                      "_order": 1103,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.main.webp.quality",
                      "_id": "quality",
                      "_path": "spin.images.main.quality",
                      "extend": "spin.images.main.quality",
                      "title": "Quality",
                      "_order": 1104,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Webp",
                  "_order": 1102,
                  "level": 4
                },
                "text": {
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "title": "Text overlay",
                  "_id": "text",
                  "_path": "spin.images.main.text",
                  "path": "spin.images.main.text",
                  "properties": {
                    "style": {
                      "type": "string",
                      "enum": [
                        "simple",
                        "soft",
                        "none"
                      ],
                      "_id": "style",
                      "_path": "spin.images.main.text.style",
                      "path": "spin.images.main.text.style",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "simple",
                            "title": "Simple"
                          },
                          {
                            "id": "soft",
                            "title": "Soft"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Style",
                      "_order": 1106,
                      "level": 5
                    },
                    "font": {
                      "_id": "font",
                      "_path": "spin.images.main.text.font",
                      "path": "spin.images.main.text.font",
                      "properties": {
                        "family": {
                          "type": "string",
                          "_id": "family",
                          "_path": "spin.images.main.text.font.family",
                          "path": "spin.images.main.text.font.family",
                          "display": {
                            "name": "fm-input",
                            "type": "text"
                          },
                          "title": "Family",
                          "_order": 1108,
                          "level": 6
                        },
                        "weight": {
                          "type": "string",
                          "enum": [
                            "light",
                            "normal",
                            "semi-bold",
                            "bold",
                            "extra-bold",
                            "300",
                            "400",
                            "600",
                            "700",
                            "800"
                          ],
                          "_id": "weight",
                          "_path": "spin.images.main.text.font.weight",
                          "path": "spin.images.main.text.font.weight",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "light",
                                "title": "Light"
                              },
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "semi-bold",
                                "title": "Semi bold"
                              },
                              {
                                "id": "bold",
                                "title": "Bold"
                              },
                              {
                                "id": "extra-bold",
                                "title": "Extra bold"
                              },
                              {
                                "id": "300",
                                "title": "300"
                              },
                              {
                                "id": "400",
                                "title": "400"
                              },
                              {
                                "id": "600",
                                "title": "600"
                              },
                              {
                                "id": "700",
                                "title": "700"
                              },
                              {
                                "id": "800",
                                "title": "800"
                              }
                            ]
                          },
                          "title": "Weight",
                          "_order": 1109,
                          "level": 6
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "_id": "style",
                          "_path": "spin.images.main.text.font.style",
                          "path": "spin.images.main.text.font.style",
                          "display": {
                            "name": "fm-radio-list",
                            "options": [
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "italic",
                                "title": "Italic"
                              }
                            ]
                          },
                          "title": "Style",
                          "_order": 1110,
                          "level": 6
                        },
                        "size": {
                          "oneOf": [
                            {
                              "type": "number",
                              "minimum": 0
                            },
                            {
                              "type": "string",
                              "format": "Percentage"
                            }
                          ],
                          "display": {
                            "name": "fm-input",
                            "type": "text",
                            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                            "hint": "[Number] or [Number]px or [Number]%"
                          },
                          "_id": "size",
                          "_path": "spin.images.main.text.font.size",
                          "path": "spin.images.main.text.font.size",
                          "title": "Size",
                          "_order": 1111,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Font",
                      "_order": 1107,
                      "level": 5
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "order": 1,
                      "_id": "text",
                      "_path": "spin.images.main.text.text",
                      "path": "spin.images.main.text.text",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "_order": 1112,
                      "level": 5
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "_id": "color",
                      "_path": "spin.images.main.text.color",
                      "path": "spin.images.main.text.color",
                      "display": {
                        "name": "fm-input",
                        "type": "color"
                      },
                      "title": "Color",
                      "_order": 1113,
                      "level": 5
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "_id": "opacity",
                      "_path": "spin.images.main.text.opacity",
                      "path": "spin.images.main.text.opacity",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "_order": 1114,
                      "level": 5
                    },
                    "background": {
                      "_id": "background",
                      "_path": "spin.images.main.text.background",
                      "path": "spin.images.main.text.background",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.main.text.background.color",
                          "path": "spin.images.main.text.background.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1116,
                          "level": 6
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "fm-input-range",
                            "type": "number",
                            "max": 100,
                            "min": 0
                          },
                          "_id": "opacity",
                          "_path": "spin.images.main.text.background.opacity",
                          "path": "spin.images.main.text.background.opacity",
                          "title": "Opacity",
                          "_order": 1117,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Background",
                      "_order": 1115,
                      "level": 5
                    },
                    "outline": {
                      "_id": "outline",
                      "_path": "spin.images.main.text.outline",
                      "path": "spin.images.main.text.outline",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.main.text.outline.color",
                          "path": "spin.images.main.text.outline.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1119,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "_id": "width",
                          "_path": "spin.images.main.text.outline.width",
                          "path": "spin.images.main.text.outline.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "min": 0
                          },
                          "title": "Width",
                          "_order": 1120,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Outline",
                      "_order": 1118,
                      "level": 5
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "_id": "size",
                      "_path": "spin.images.main.text.size",
                      "path": "spin.images.main.text.size",
                      "display": {
                        "name": "fm-input",
                        "type": "text"
                      },
                      "title": "Size",
                      "_order": 1121,
                      "level": 5
                    },
                    "position": {
                      "type": "string",
                      "enum": [
                        "north",
                        "northeast",
                        "northwest",
                        "center",
                        "south",
                        "southeast",
                        "southwest",
                        "east",
                        "west"
                      ],
                      "_id": "position",
                      "_path": "spin.images.main.text.position",
                      "path": "spin.images.main.text.position",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "north",
                            "title": "North"
                          },
                          {
                            "id": "northeast",
                            "title": "Northeast"
                          },
                          {
                            "id": "northwest",
                            "title": "Northwest"
                          },
                          {
                            "id": "center",
                            "title": "Center"
                          },
                          {
                            "id": "south",
                            "title": "South"
                          },
                          {
                            "id": "southeast",
                            "title": "Southeast"
                          },
                          {
                            "id": "southwest",
                            "title": "Southwest"
                          },
                          {
                            "id": "east",
                            "title": "East"
                          },
                          {
                            "id": "west",
                            "title": "West"
                          }
                        ]
                      },
                      "title": "Position",
                      "_order": 1122,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1105,
                  "level": 4
                }
              },
              "_order": 1063,
              "level": 3
            },
            "zoom": {
              "title": "Zoom image",
              "display": {
                "name": "fm-tree",
                "tree": [
                  "scale",
                  "crop",
                  "text",
                  "effects"
                ]
              },
              "_id": "zoom",
              "_path": "spin.images.zoom",
              "path": "spin.images.zoom",
              "properties": {
                "profile": {
                  "type": "string",
                  "_id": "profile",
                  "_path": "spin.images.zoom.profile",
                  "path": "spin.images.zoom.profile",
                  "display": {
                    "name": "fm-input",
                    "type": "text"
                  },
                  "title": "Profile",
                  "_order": 1124,
                  "level": 4
                },
                "format": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg",
                    "webp"
                  ],
                  "display": {
                    "name": "fm-radio-list",
                    "options": [
                      {
                        "id": "png",
                        "title": "PNG"
                      },
                      {
                        "id": "jpg",
                        "title": "JPG"
                      },
                      {
                        "id": "webp",
                        "title": "WebP"
                      }
                    ],
                    "labels": {
                      "png": "PNG",
                      "webp": "WebP",
                      "jpg": "JPG"
                    }
                  },
                  "_id": "format",
                  "_path": "spin.images.zoom.format",
                  "path": "spin.images.zoom.format",
                  "title": "Format",
                  "_order": 1125,
                  "level": 4
                },
                "scale": {
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "title": "Scaling options",
                  "_id": "scale",
                  "_path": "spin.images.zoom.scale",
                  "path": "spin.images.zoom.scale",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.zoom.scale.width",
                      "path": "spin.images.zoom.scale.width",
                      "title": "Width",
                      "_order": 1127,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.zoom.scale.height",
                      "path": "spin.images.zoom.scale.height",
                      "title": "Height",
                      "_order": 1128,
                      "level": 5
                    },
                    "option": {
                      "type": "string",
                      "enum": [
                        "fit",
                        "fill",
                        "ignore",
                        "noup"
                      ],
                      "display": {
                        "name": "fm-select",
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
                            "title": "Ignore aspect ratio"
                          },
                          {
                            "id": "noup",
                            "title": "No upscale"
                          }
                        ],
                        "labels": {
                          "ignore": "Ignore aspect ratio",
                          "noup": "No upscale"
                        }
                      },
                      "_id": "option",
                      "_path": "spin.images.zoom.scale.option",
                      "path": "spin.images.zoom.scale.option",
                      "title": "Option",
                      "_order": 1129,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1126,
                  "level": 4
                },
                "crop": {
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "title": "Crop options",
                  "_id": "crop",
                  "_path": "spin.images.zoom.crop",
                  "path": "spin.images.zoom.crop",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.zoom.crop.width",
                      "path": "spin.images.zoom.crop.width",
                      "title": "Width",
                      "_order": 1131,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.zoom.crop.height",
                      "path": "spin.images.zoom.crop.height",
                      "title": "Height",
                      "_order": 1132,
                      "level": 5
                    },
                    "x": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "X offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "x",
                      "_path": "spin.images.zoom.crop.x",
                      "path": "spin.images.zoom.crop.x",
                      "title": "X",
                      "_order": 1133,
                      "level": 5
                    },
                    "y": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "Y offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "y",
                      "_path": "spin.images.zoom.crop.y",
                      "path": "spin.images.zoom.crop.y",
                      "title": "Y",
                      "_order": 1134,
                      "level": 5
                    },
                    "thumbnail": {
                      "type": "number",
                      "minimum": 1,
                      "maximum": 256,
                      "description": "Create square thumbnail of specified size",
                      "path": "spin.images.zoom.crop.thumbnail",
                      "_id": "thumbnail",
                      "_path": "spin.images.zoom.thumbnail",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 256,
                        "min": 1
                      },
                      "title": "Thumbnail",
                      "_order": 1135,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1130,
                  "level": 4
                },
                "effects": {
                  "properties": {
                    "rotate": {
                      "type": "number",
                      "description": "Rotate image (degrees)",
                      "minimum": -180,
                      "maximum": 180,
                      "path": "spin.images.zoom.effects.rotate",
                      "_id": "rotate",
                      "_path": "spin.images.zoom.rotate",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 180,
                        "min": -180
                      },
                      "title": "Rotate",
                      "_order": 1137,
                      "level": 5
                    },
                    "brightness": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.zoom.effects.brightness",
                      "order": 1,
                      "_id": "brightness",
                      "_path": "spin.images.zoom.brightness",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Brightness",
                      "_order": 1138,
                      "level": 5
                    },
                    "contrast": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.zoom.effects.contrast",
                      "order": 2,
                      "_id": "contrast",
                      "_path": "spin.images.zoom.contrast",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Contrast",
                      "_order": 1139,
                      "level": 5
                    },
                    "exposure": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.zoom.effects.exposure",
                      "order": 3,
                      "_id": "exposure",
                      "_path": "spin.images.zoom.exposure",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Exposure",
                      "_order": 1140,
                      "level": 5
                    },
                    "grayscale": {
                      "type": "boolean",
                      "description": "Transform the image to black and white",
                      "path": "spin.images.zoom.effects.grayscale",
                      "order": 4,
                      "_id": "grayscale",
                      "_path": "spin.images.zoom.grayscale",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Grayscale",
                      "_order": 1141,
                      "level": 5
                    },
                    "blur": {
                      "type": "number",
                      "description": "Apply a blur effect to the image",
                      "path": "spin.images.zoom.effects.blur",
                      "order": 6,
                      "_id": "blur",
                      "_path": "spin.images.zoom.blur",
                      "display": {
                        "name": "fm-input",
                        "type": "number"
                      },
                      "title": "Blur",
                      "_order": 1142,
                      "level": 5
                    },
                    "tiltshift": {
                      "type": "boolean",
                      "description": "Apply a tilt-shift effect to the image",
                      "path": "spin.images.zoom.effects.tiltshift",
                      "_id": "tiltshift",
                      "_path": "spin.images.zoom.tiltshift",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Tiltshift",
                      "_order": 1143,
                      "level": 5
                    },
                    "frame": {
                      "additionalProperties": false,
                      "required": [
                        "style"
                      ],
                      "path": "spin.images.zoom.effects.frame",
                      "_id": "frame",
                      "_path": "spin.images.zoom.frame",
                      "properties": {
                        "style": {
                          "type": "string",
                          "enum": [
                            "simple",
                            "mirror",
                            "edge",
                            "deckled",
                            "none"
                          ],
                          "_id": "style",
                          "_path": "spin.images.zoom.frame.style",
                          "path": "spin.images.zoom.effects.frame.style",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "simple",
                                "title": "Simple"
                              },
                              {
                                "id": "mirror",
                                "title": "Mirror"
                              },
                              {
                                "id": "edge",
                                "title": "Edge"
                              },
                              {
                                "id": "deckled",
                                "title": "Deckled"
                              },
                              {
                                "id": "none",
                                "title": "None"
                              }
                            ],
                            "required": true
                          },
                          "title": "Style",
                          "_order": 1145,
                          "level": 6
                        },
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.zoom.frame.color",
                          "path": "spin.images.zoom.effects.frame.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1146,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "_id": "width",
                          "_path": "spin.images.zoom.frame.width",
                          "path": "spin.images.zoom.effects.frame.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number"
                          },
                          "title": "Width",
                          "_order": 1147,
                          "level": 6
                        },
                        "rim": {
                          "_id": "rim",
                          "_path": "spin.images.zoom.frame.rim",
                          "path": "spin.images.zoom.effects.frame.rim",
                          "properties": {
                            "color": {
                              "type": "string",
                              "format": "Color",
                              "_id": "color",
                              "_path": "spin.images.zoom.frame.rim.color",
                              "path": "spin.images.zoom.effects.frame.rim.color",
                              "display": {
                                "name": "fm-input",
                                "type": "color"
                              },
                              "title": "Color",
                              "_order": 1149,
                              "level": 7
                            },
                            "width": {
                              "type": "number",
                              "_id": "width",
                              "_path": "spin.images.zoom.frame.rim.width",
                              "path": "spin.images.zoom.effects.frame.rim.width",
                              "display": {
                                "name": "fm-input",
                                "type": "number"
                              },
                              "title": "Width",
                              "_order": 1150,
                              "level": 7
                            }
                          },
                          "display": {
                            "name": "fm-input-group"
                          },
                          "title": "Rim",
                          "_order": 1148,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Frame",
                      "_order": 1144,
                      "level": 5
                    },
                    "colortone": {
                      "type": "string",
                      "enum": [
                        "sepia",
                        "warm",
                        "cold",
                        "sunset",
                        "purpletan",
                        "texas",
                        "none"
                      ],
                      "path": "spin.images.zoom.effects.colortone",
                      "order": 5,
                      "_id": "colortone",
                      "_path": "spin.images.zoom.colortone",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "sepia",
                            "title": "Sepia"
                          },
                          {
                            "id": "warm",
                            "title": "Warm"
                          },
                          {
                            "id": "cold",
                            "title": "Cold"
                          },
                          {
                            "id": "sunset",
                            "title": "Sunset"
                          },
                          {
                            "id": "purpletan",
                            "title": "Purpletan"
                          },
                          {
                            "id": "texas",
                            "title": "Texas"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Colortone",
                      "_order": 1151,
                      "level": 5
                    },
                    "vignette": {
                      "additionalProperties": false,
                      "path": "spin.images.zoom.effects.vignette",
                      "_id": "vignette",
                      "_path": "spin.images.zoom.vignette",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.zoom.vignette.color",
                          "path": "spin.images.zoom.effects.vignette.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1153,
                          "level": 6
                        },
                        "value": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 1,
                          "_id": "value",
                          "_path": "spin.images.zoom.vignette.value",
                          "path": "spin.images.zoom.effects.vignette.value",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "max": 1,
                            "min": 0
                          },
                          "title": "Value",
                          "_order": 1154,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Vignette",
                      "_order": 1152,
                      "level": 5
                    }
                  },
                  "_id": "effects",
                  "path": "spin.images.zoom.effects",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Effects",
                  "_order": 1136,
                  "level": 4
                },
                "jpeg": {
                  "properties": {
                    "subsampling": {
                      "type": "string",
                      "enum": [
                        "4:4:4",
                        "4:2:2",
                        "4:2:0"
                      ],
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "4:4:4",
                            "title": "4:4:4 - Best quality"
                          },
                          {
                            "id": "4:2:2",
                            "title": "4:2:2"
                          },
                          {
                            "id": "4:2:0",
                            "title": "4:2:0"
                          }
                        ],
                        "labels": {
                          "4:4:4": "4:4:4 - Best quality"
                        }
                      },
                      "path": "spin.images.zoom.jpeg.subsampling",
                      "_id": "subsampling",
                      "_path": "spin.images.zoom.subsampling",
                      "title": "Subsampling",
                      "_order": 1156,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.zoom.jpeg.quality",
                      "_id": "quality",
                      "_path": "spin.images.zoom.quality",
                      "title": "Quality",
                      "_order": 1157,
                      "level": 5
                    },
                    "progressive": {
                      "type": "boolean",
                      "description": "Create progressive image",
                      "path": "spin.images.zoom.jpeg.progressive",
                      "_id": "progressive",
                      "_path": "spin.images.zoom.progressive",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Progressive",
                      "_order": 1158,
                      "level": 5
                    }
                  },
                  "_id": "jpeg",
                  "path": "spin.images.zoom.jpeg",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Jpeg",
                  "_order": 1155,
                  "level": 4
                },
                "png": {
                  "additionalProperties": false,
                  "_id": "png",
                  "_path": "spin.images.zoom.png",
                  "path": "spin.images.zoom.png",
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
                      "_id": "compression",
                      "_path": "spin.images.zoom.png.compression",
                      "path": "spin.images.zoom.png.compression",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 9,
                        "min": 0
                      },
                      "title": "Compression",
                      "_order": 1160,
                      "level": 5
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
                      "_path": "spin.images.zoom.png.filtering",
                      "path": "spin.images.zoom.png.filtering",
                      "display": {
                        "name": "fm-select",
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
                      "_order": 1161,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Png",
                  "_order": 1159,
                  "level": 4
                },
                "webp": {
                  "additionalProperties": false,
                  "_id": "webp",
                  "_path": "spin.images.zoom.webp",
                  "path": "spin.images.zoom.webp",
                  "properties": {
                    "fallback": {
                      "type": "string",
                      "enum": [
                        "png",
                        "jpg"
                      ],
                      "_id": "fallback",
                      "_path": "spin.images.zoom.webp.fallback",
                      "path": "spin.images.zoom.webp.fallback",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "png",
                            "title": "Png"
                          },
                          {
                            "id": "jpg",
                            "title": "Jpg"
                          }
                        ]
                      },
                      "title": "Fallback",
                      "_order": 1163,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.zoom.webp.quality",
                      "_id": "quality",
                      "_path": "spin.images.zoom.quality",
                      "extend": "spin.images.zoom.quality",
                      "title": "Quality",
                      "_order": 1164,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Webp",
                  "_order": 1162,
                  "level": 4
                },
                "text": {
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "title": "Text overlay",
                  "_id": "text",
                  "_path": "spin.images.zoom.text",
                  "path": "spin.images.zoom.text",
                  "properties": {
                    "style": {
                      "type": "string",
                      "enum": [
                        "simple",
                        "soft",
                        "none"
                      ],
                      "_id": "style",
                      "_path": "spin.images.zoom.text.style",
                      "path": "spin.images.zoom.text.style",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "simple",
                            "title": "Simple"
                          },
                          {
                            "id": "soft",
                            "title": "Soft"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Style",
                      "_order": 1166,
                      "level": 5
                    },
                    "font": {
                      "_id": "font",
                      "_path": "spin.images.zoom.text.font",
                      "path": "spin.images.zoom.text.font",
                      "properties": {
                        "family": {
                          "type": "string",
                          "_id": "family",
                          "_path": "spin.images.zoom.text.font.family",
                          "path": "spin.images.zoom.text.font.family",
                          "display": {
                            "name": "fm-input",
                            "type": "text"
                          },
                          "title": "Family",
                          "_order": 1168,
                          "level": 6
                        },
                        "weight": {
                          "type": "string",
                          "enum": [
                            "light",
                            "normal",
                            "semi-bold",
                            "bold",
                            "extra-bold",
                            "300",
                            "400",
                            "600",
                            "700",
                            "800"
                          ],
                          "_id": "weight",
                          "_path": "spin.images.zoom.text.font.weight",
                          "path": "spin.images.zoom.text.font.weight",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "light",
                                "title": "Light"
                              },
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "semi-bold",
                                "title": "Semi bold"
                              },
                              {
                                "id": "bold",
                                "title": "Bold"
                              },
                              {
                                "id": "extra-bold",
                                "title": "Extra bold"
                              },
                              {
                                "id": "300",
                                "title": "300"
                              },
                              {
                                "id": "400",
                                "title": "400"
                              },
                              {
                                "id": "600",
                                "title": "600"
                              },
                              {
                                "id": "700",
                                "title": "700"
                              },
                              {
                                "id": "800",
                                "title": "800"
                              }
                            ]
                          },
                          "title": "Weight",
                          "_order": 1169,
                          "level": 6
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "_id": "style",
                          "_path": "spin.images.zoom.text.font.style",
                          "path": "spin.images.zoom.text.font.style",
                          "display": {
                            "name": "fm-radio-list",
                            "options": [
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "italic",
                                "title": "Italic"
                              }
                            ]
                          },
                          "title": "Style",
                          "_order": 1170,
                          "level": 6
                        },
                        "size": {
                          "oneOf": [
                            {
                              "type": "number",
                              "minimum": 0
                            },
                            {
                              "type": "string",
                              "format": "Percentage"
                            }
                          ],
                          "display": {
                            "name": "fm-input",
                            "type": "text",
                            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                            "hint": "[Number] or [Number]px or [Number]%"
                          },
                          "_id": "size",
                          "_path": "spin.images.zoom.text.font.size",
                          "path": "spin.images.zoom.text.font.size",
                          "title": "Size",
                          "_order": 1171,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Font",
                      "_order": 1167,
                      "level": 5
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "order": 1,
                      "_id": "text",
                      "_path": "spin.images.zoom.text.text",
                      "path": "spin.images.zoom.text.text",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "_order": 1172,
                      "level": 5
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "_id": "color",
                      "_path": "spin.images.zoom.text.color",
                      "path": "spin.images.zoom.text.color",
                      "display": {
                        "name": "fm-input",
                        "type": "color"
                      },
                      "title": "Color",
                      "_order": 1173,
                      "level": 5
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "_id": "opacity",
                      "_path": "spin.images.zoom.text.opacity",
                      "path": "spin.images.zoom.text.opacity",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "_order": 1174,
                      "level": 5
                    },
                    "background": {
                      "_id": "background",
                      "_path": "spin.images.zoom.text.background",
                      "path": "spin.images.zoom.text.background",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.zoom.text.background.color",
                          "path": "spin.images.zoom.text.background.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1176,
                          "level": 6
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "fm-input-range",
                            "type": "number",
                            "max": 100,
                            "min": 0
                          },
                          "_id": "opacity",
                          "_path": "spin.images.zoom.text.background.opacity",
                          "path": "spin.images.zoom.text.background.opacity",
                          "title": "Opacity",
                          "_order": 1177,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Background",
                      "_order": 1175,
                      "level": 5
                    },
                    "outline": {
                      "_id": "outline",
                      "_path": "spin.images.zoom.text.outline",
                      "path": "spin.images.zoom.text.outline",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.zoom.text.outline.color",
                          "path": "spin.images.zoom.text.outline.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1179,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "_id": "width",
                          "_path": "spin.images.zoom.text.outline.width",
                          "path": "spin.images.zoom.text.outline.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "min": 0
                          },
                          "title": "Width",
                          "_order": 1180,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Outline",
                      "_order": 1178,
                      "level": 5
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "_id": "size",
                      "_path": "spin.images.zoom.text.size",
                      "path": "spin.images.zoom.text.size",
                      "display": {
                        "name": "fm-input",
                        "type": "text"
                      },
                      "title": "Size",
                      "_order": 1181,
                      "level": 5
                    },
                    "position": {
                      "type": "string",
                      "enum": [
                        "north",
                        "northeast",
                        "northwest",
                        "center",
                        "south",
                        "southeast",
                        "southwest",
                        "east",
                        "west"
                      ],
                      "_id": "position",
                      "_path": "spin.images.zoom.text.position",
                      "path": "spin.images.zoom.text.position",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "north",
                            "title": "North"
                          },
                          {
                            "id": "northeast",
                            "title": "Northeast"
                          },
                          {
                            "id": "northwest",
                            "title": "Northwest"
                          },
                          {
                            "id": "center",
                            "title": "Center"
                          },
                          {
                            "id": "south",
                            "title": "South"
                          },
                          {
                            "id": "southeast",
                            "title": "Southeast"
                          },
                          {
                            "id": "southwest",
                            "title": "Southwest"
                          },
                          {
                            "id": "east",
                            "title": "East"
                          },
                          {
                            "id": "west",
                            "title": "West"
                          }
                        ]
                      },
                      "title": "Position",
                      "_order": 1182,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1165,
                  "level": 4
                }
              },
              "_order": 1123,
              "level": 3
            },
            "fullscreen": {
              "title": "Fullscreen image",
              "display": {
                "name": "fm-tree",
                "tree": [
                  "scale",
                  "crop",
                  "text",
                  "effects"
                ]
              },
              "_id": "fullscreen",
              "_path": "spin.images.fullscreen",
              "path": "spin.images.fullscreen",
              "properties": {
                "profile": {
                  "type": "string",
                  "_id": "profile",
                  "_path": "spin.images.fullscreen.profile",
                  "path": "spin.images.fullscreen.profile",
                  "display": {
                    "name": "fm-input",
                    "type": "text"
                  },
                  "title": "Profile",
                  "_order": 1184,
                  "level": 4
                },
                "format": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg",
                    "webp"
                  ],
                  "display": {
                    "name": "fm-radio-list",
                    "options": [
                      {
                        "id": "png",
                        "title": "PNG"
                      },
                      {
                        "id": "jpg",
                        "title": "JPG"
                      },
                      {
                        "id": "webp",
                        "title": "WebP"
                      }
                    ],
                    "labels": {
                      "png": "PNG",
                      "webp": "WebP",
                      "jpg": "JPG"
                    }
                  },
                  "_id": "format",
                  "_path": "spin.images.fullscreen.format",
                  "path": "spin.images.fullscreen.format",
                  "title": "Format",
                  "_order": 1185,
                  "level": 4
                },
                "scale": {
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "title": "Scaling options",
                  "_id": "scale",
                  "_path": "spin.images.fullscreen.scale",
                  "path": "spin.images.fullscreen.scale",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.fullscreen.scale.width",
                      "path": "spin.images.fullscreen.scale.width",
                      "title": "Width",
                      "_order": 1187,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.fullscreen.scale.height",
                      "path": "spin.images.fullscreen.scale.height",
                      "title": "Height",
                      "_order": 1188,
                      "level": 5
                    },
                    "option": {
                      "type": "string",
                      "enum": [
                        "fit",
                        "fill",
                        "ignore",
                        "noup"
                      ],
                      "display": {
                        "name": "fm-select",
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
                            "title": "Ignore aspect ratio"
                          },
                          {
                            "id": "noup",
                            "title": "No upscale"
                          }
                        ],
                        "labels": {
                          "ignore": "Ignore aspect ratio",
                          "noup": "No upscale"
                        }
                      },
                      "_id": "option",
                      "_path": "spin.images.fullscreen.scale.option",
                      "path": "spin.images.fullscreen.scale.option",
                      "title": "Option",
                      "_order": 1189,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1186,
                  "level": 4
                },
                "crop": {
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "title": "Crop options",
                  "_id": "crop",
                  "_path": "spin.images.fullscreen.crop",
                  "path": "spin.images.fullscreen.crop",
                  "properties": {
                    "width": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Width",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "width",
                      "_path": "spin.images.fullscreen.crop.width",
                      "path": "spin.images.fullscreen.crop.width",
                      "title": "Width",
                      "_order": 1191,
                      "level": 5
                    },
                    "height": {
                      "oneOf": [
                        {
                          "type": "number",
                          "minimum": 0
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        }
                      ],
                      "description": "Height",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                        "hint": "[Number] or [Number]px or [Number]%"
                      },
                      "_id": "height",
                      "_path": "spin.images.fullscreen.crop.height",
                      "path": "spin.images.fullscreen.crop.height",
                      "title": "Height",
                      "_order": 1192,
                      "level": 5
                    },
                    "x": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "X offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "x",
                      "_path": "spin.images.fullscreen.crop.x",
                      "path": "spin.images.fullscreen.crop.x",
                      "title": "X",
                      "_order": 1193,
                      "level": 5
                    },
                    "y": {
                      "oneOf": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "string",
                          "format": "Percentage"
                        },
                        {
                          "type": "string",
                          "enum": [
                            "center"
                          ]
                        }
                      ],
                      "description": "Y offset",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                        "hint": "(+/-) 0-100% or 0-9999px or center"
                      },
                      "_id": "y",
                      "_path": "spin.images.fullscreen.crop.y",
                      "path": "spin.images.fullscreen.crop.y",
                      "title": "Y",
                      "_order": 1194,
                      "level": 5
                    },
                    "thumbnail": {
                      "type": "number",
                      "minimum": 1,
                      "maximum": 256,
                      "description": "Create square thumbnail of specified size",
                      "path": "spin.images.fullscreen.crop.thumbnail",
                      "_id": "thumbnail",
                      "_path": "spin.images.fullscreen.thumbnail",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 256,
                        "min": 1
                      },
                      "title": "Thumbnail",
                      "_order": 1195,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1190,
                  "level": 4
                },
                "effects": {
                  "properties": {
                    "rotate": {
                      "type": "number",
                      "description": "Rotate image (degrees)",
                      "minimum": -180,
                      "maximum": 180,
                      "path": "spin.images.fullscreen.effects.rotate",
                      "_id": "rotate",
                      "_path": "spin.images.fullscreen.rotate",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 180,
                        "min": -180
                      },
                      "title": "Rotate",
                      "_order": 1197,
                      "level": 5
                    },
                    "brightness": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.fullscreen.effects.brightness",
                      "order": 1,
                      "_id": "brightness",
                      "_path": "spin.images.fullscreen.brightness",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Brightness",
                      "_order": 1198,
                      "level": 5
                    },
                    "contrast": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.fullscreen.effects.contrast",
                      "order": 2,
                      "_id": "contrast",
                      "_path": "spin.images.fullscreen.contrast",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Contrast",
                      "_order": 1199,
                      "level": 5
                    },
                    "exposure": {
                      "type": "number",
                      "minimum": -100,
                      "maximum": 100,
                      "path": "spin.images.fullscreen.effects.exposure",
                      "order": 3,
                      "_id": "exposure",
                      "_path": "spin.images.fullscreen.exposure",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": -100
                      },
                      "title": "Exposure",
                      "_order": 1200,
                      "level": 5
                    },
                    "grayscale": {
                      "type": "boolean",
                      "description": "Transform the image to black and white",
                      "path": "spin.images.fullscreen.effects.grayscale",
                      "order": 4,
                      "_id": "grayscale",
                      "_path": "spin.images.fullscreen.grayscale",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Grayscale",
                      "_order": 1201,
                      "level": 5
                    },
                    "blur": {
                      "type": "number",
                      "description": "Apply a blur effect to the image",
                      "path": "spin.images.fullscreen.effects.blur",
                      "order": 6,
                      "_id": "blur",
                      "_path": "spin.images.fullscreen.blur",
                      "display": {
                        "name": "fm-input",
                        "type": "number"
                      },
                      "title": "Blur",
                      "_order": 1202,
                      "level": 5
                    },
                    "tiltshift": {
                      "type": "boolean",
                      "description": "Apply a tilt-shift effect to the image",
                      "path": "spin.images.fullscreen.effects.tiltshift",
                      "_id": "tiltshift",
                      "_path": "spin.images.fullscreen.tiltshift",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Tiltshift",
                      "_order": 1203,
                      "level": 5
                    },
                    "frame": {
                      "additionalProperties": false,
                      "required": [
                        "style"
                      ],
                      "path": "spin.images.fullscreen.effects.frame",
                      "_id": "frame",
                      "_path": "spin.images.fullscreen.frame",
                      "properties": {
                        "style": {
                          "type": "string",
                          "enum": [
                            "simple",
                            "mirror",
                            "edge",
                            "deckled",
                            "none"
                          ],
                          "_id": "style",
                          "_path": "spin.images.fullscreen.frame.style",
                          "path": "spin.images.fullscreen.effects.frame.style",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "simple",
                                "title": "Simple"
                              },
                              {
                                "id": "mirror",
                                "title": "Mirror"
                              },
                              {
                                "id": "edge",
                                "title": "Edge"
                              },
                              {
                                "id": "deckled",
                                "title": "Deckled"
                              },
                              {
                                "id": "none",
                                "title": "None"
                              }
                            ],
                            "required": true
                          },
                          "title": "Style",
                          "_order": 1205,
                          "level": 6
                        },
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.fullscreen.frame.color",
                          "path": "spin.images.fullscreen.effects.frame.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1206,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "_id": "width",
                          "_path": "spin.images.fullscreen.frame.width",
                          "path": "spin.images.fullscreen.effects.frame.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number"
                          },
                          "title": "Width",
                          "_order": 1207,
                          "level": 6
                        },
                        "rim": {
                          "_id": "rim",
                          "_path": "spin.images.fullscreen.frame.rim",
                          "path": "spin.images.fullscreen.effects.frame.rim",
                          "properties": {
                            "color": {
                              "type": "string",
                              "format": "Color",
                              "_id": "color",
                              "_path": "spin.images.fullscreen.frame.rim.color",
                              "path": "spin.images.fullscreen.effects.frame.rim.color",
                              "display": {
                                "name": "fm-input",
                                "type": "color"
                              },
                              "title": "Color",
                              "_order": 1209,
                              "level": 7
                            },
                            "width": {
                              "type": "number",
                              "_id": "width",
                              "_path": "spin.images.fullscreen.frame.rim.width",
                              "path": "spin.images.fullscreen.effects.frame.rim.width",
                              "display": {
                                "name": "fm-input",
                                "type": "number"
                              },
                              "title": "Width",
                              "_order": 1210,
                              "level": 7
                            }
                          },
                          "display": {
                            "name": "fm-input-group"
                          },
                          "title": "Rim",
                          "_order": 1208,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Frame",
                      "_order": 1204,
                      "level": 5
                    },
                    "colortone": {
                      "type": "string",
                      "enum": [
                        "sepia",
                        "warm",
                        "cold",
                        "sunset",
                        "purpletan",
                        "texas",
                        "none"
                      ],
                      "path": "spin.images.fullscreen.effects.colortone",
                      "order": 5,
                      "_id": "colortone",
                      "_path": "spin.images.fullscreen.colortone",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "sepia",
                            "title": "Sepia"
                          },
                          {
                            "id": "warm",
                            "title": "Warm"
                          },
                          {
                            "id": "cold",
                            "title": "Cold"
                          },
                          {
                            "id": "sunset",
                            "title": "Sunset"
                          },
                          {
                            "id": "purpletan",
                            "title": "Purpletan"
                          },
                          {
                            "id": "texas",
                            "title": "Texas"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Colortone",
                      "_order": 1211,
                      "level": 5
                    },
                    "vignette": {
                      "additionalProperties": false,
                      "path": "spin.images.fullscreen.effects.vignette",
                      "_id": "vignette",
                      "_path": "spin.images.fullscreen.vignette",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.fullscreen.vignette.color",
                          "path": "spin.images.fullscreen.effects.vignette.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1213,
                          "level": 6
                        },
                        "value": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 1,
                          "_id": "value",
                          "_path": "spin.images.fullscreen.vignette.value",
                          "path": "spin.images.fullscreen.effects.vignette.value",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "max": 1,
                            "min": 0
                          },
                          "title": "Value",
                          "_order": 1214,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Vignette",
                      "_order": 1212,
                      "level": 5
                    }
                  },
                  "_id": "effects",
                  "path": "spin.images.fullscreen.effects",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Effects",
                  "_order": 1196,
                  "level": 4
                },
                "jpeg": {
                  "properties": {
                    "subsampling": {
                      "type": "string",
                      "enum": [
                        "4:4:4",
                        "4:2:2",
                        "4:2:0"
                      ],
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "4:4:4",
                            "title": "4:4:4 - Best quality"
                          },
                          {
                            "id": "4:2:2",
                            "title": "4:2:2"
                          },
                          {
                            "id": "4:2:0",
                            "title": "4:2:0"
                          }
                        ],
                        "labels": {
                          "4:4:4": "4:4:4 - Best quality"
                        }
                      },
                      "path": "spin.images.fullscreen.jpeg.subsampling",
                      "_id": "subsampling",
                      "_path": "spin.images.fullscreen.subsampling",
                      "title": "Subsampling",
                      "_order": 1216,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.fullscreen.jpeg.quality",
                      "_id": "quality",
                      "_path": "spin.images.fullscreen.quality",
                      "title": "Quality",
                      "_order": 1217,
                      "level": 5
                    },
                    "progressive": {
                      "type": "boolean",
                      "description": "Create progressive image",
                      "path": "spin.images.fullscreen.jpeg.progressive",
                      "_id": "progressive",
                      "_path": "spin.images.fullscreen.progressive",
                      "display": {
                        "name": "fm-checkbox"
                      },
                      "title": "Progressive",
                      "_order": 1218,
                      "level": 5
                    }
                  },
                  "_id": "jpeg",
                  "path": "spin.images.fullscreen.jpeg",
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Jpeg",
                  "_order": 1215,
                  "level": 4
                },
                "png": {
                  "additionalProperties": false,
                  "_id": "png",
                  "_path": "spin.images.fullscreen.png",
                  "path": "spin.images.fullscreen.png",
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
                      "_id": "compression",
                      "_path": "spin.images.fullscreen.png.compression",
                      "path": "spin.images.fullscreen.png.compression",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 9,
                        "min": 0
                      },
                      "title": "Compression",
                      "_order": 1220,
                      "level": 5
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
                      "_path": "spin.images.fullscreen.png.filtering",
                      "path": "spin.images.fullscreen.png.filtering",
                      "display": {
                        "name": "fm-select",
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
                      "_order": 1221,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Png",
                  "_order": 1219,
                  "level": 4
                },
                "webp": {
                  "additionalProperties": false,
                  "_id": "webp",
                  "_path": "spin.images.fullscreen.webp",
                  "path": "spin.images.fullscreen.webp",
                  "properties": {
                    "fallback": {
                      "type": "string",
                      "enum": [
                        "png",
                        "jpg"
                      ],
                      "_id": "fallback",
                      "_path": "spin.images.fullscreen.webp.fallback",
                      "path": "spin.images.fullscreen.webp.fallback",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "png",
                            "title": "Png"
                          },
                          {
                            "id": "jpg",
                            "title": "Jpg"
                          }
                        ]
                      },
                      "title": "Fallback",
                      "_order": 1223,
                      "level": 5
                    },
                    "quality": {
                      "type": "number",
                      "description": "Image quality",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "fm-input-range",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "path": "spin.images.fullscreen.webp.quality",
                      "_id": "quality",
                      "_path": "spin.images.fullscreen.quality",
                      "extend": "spin.images.fullscreen.quality",
                      "title": "Quality",
                      "_order": 1224,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "title": "Webp",
                  "_order": 1222,
                  "level": 4
                },
                "text": {
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "title": "Text overlay",
                  "_id": "text",
                  "_path": "spin.images.fullscreen.text",
                  "path": "spin.images.fullscreen.text",
                  "properties": {
                    "style": {
                      "type": "string",
                      "enum": [
                        "simple",
                        "soft",
                        "none"
                      ],
                      "_id": "style",
                      "_path": "spin.images.fullscreen.text.style",
                      "path": "spin.images.fullscreen.text.style",
                      "display": {
                        "name": "fm-radio-list",
                        "options": [
                          {
                            "id": "simple",
                            "title": "Simple"
                          },
                          {
                            "id": "soft",
                            "title": "Soft"
                          },
                          {
                            "id": "none",
                            "title": "None"
                          }
                        ]
                      },
                      "title": "Style",
                      "_order": 1226,
                      "level": 5
                    },
                    "font": {
                      "_id": "font",
                      "_path": "spin.images.fullscreen.text.font",
                      "path": "spin.images.fullscreen.text.font",
                      "properties": {
                        "family": {
                          "type": "string",
                          "_id": "family",
                          "_path": "spin.images.fullscreen.text.font.family",
                          "path": "spin.images.fullscreen.text.font.family",
                          "display": {
                            "name": "fm-input",
                            "type": "text"
                          },
                          "title": "Family",
                          "_order": 1228,
                          "level": 6
                        },
                        "weight": {
                          "type": "string",
                          "enum": [
                            "light",
                            "normal",
                            "semi-bold",
                            "bold",
                            "extra-bold",
                            "300",
                            "400",
                            "600",
                            "700",
                            "800"
                          ],
                          "_id": "weight",
                          "_path": "spin.images.fullscreen.text.font.weight",
                          "path": "spin.images.fullscreen.text.font.weight",
                          "display": {
                            "name": "fm-select",
                            "options": [
                              {
                                "id": "light",
                                "title": "Light"
                              },
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "semi-bold",
                                "title": "Semi bold"
                              },
                              {
                                "id": "bold",
                                "title": "Bold"
                              },
                              {
                                "id": "extra-bold",
                                "title": "Extra bold"
                              },
                              {
                                "id": "300",
                                "title": "300"
                              },
                              {
                                "id": "400",
                                "title": "400"
                              },
                              {
                                "id": "600",
                                "title": "600"
                              },
                              {
                                "id": "700",
                                "title": "700"
                              },
                              {
                                "id": "800",
                                "title": "800"
                              }
                            ]
                          },
                          "title": "Weight",
                          "_order": 1229,
                          "level": 6
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "_id": "style",
                          "_path": "spin.images.fullscreen.text.font.style",
                          "path": "spin.images.fullscreen.text.font.style",
                          "display": {
                            "name": "fm-radio-list",
                            "options": [
                              {
                                "id": "normal",
                                "title": "Normal"
                              },
                              {
                                "id": "italic",
                                "title": "Italic"
                              }
                            ]
                          },
                          "title": "Style",
                          "_order": 1230,
                          "level": 6
                        },
                        "size": {
                          "oneOf": [
                            {
                              "type": "number",
                              "minimum": 0
                            },
                            {
                              "type": "string",
                              "format": "Percentage"
                            }
                          ],
                          "display": {
                            "name": "fm-input",
                            "type": "text",
                            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                            "hint": "[Number] or [Number]px or [Number]%"
                          },
                          "_id": "size",
                          "_path": "spin.images.fullscreen.text.font.size",
                          "path": "spin.images.fullscreen.text.font.size",
                          "title": "Size",
                          "_order": 1231,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Font",
                      "_order": 1227,
                      "level": 5
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "order": 1,
                      "_id": "text",
                      "_path": "spin.images.fullscreen.text.text",
                      "path": "spin.images.fullscreen.text.text",
                      "display": {
                        "name": "fm-input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "_order": 1232,
                      "level": 5
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "_id": "color",
                      "_path": "spin.images.fullscreen.text.color",
                      "path": "spin.images.fullscreen.text.color",
                      "display": {
                        "name": "fm-input",
                        "type": "color"
                      },
                      "title": "Color",
                      "_order": 1233,
                      "level": 5
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "_id": "opacity",
                      "_path": "spin.images.fullscreen.text.opacity",
                      "path": "spin.images.fullscreen.text.opacity",
                      "display": {
                        "name": "fm-input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "_order": 1234,
                      "level": 5
                    },
                    "background": {
                      "_id": "background",
                      "_path": "spin.images.fullscreen.text.background",
                      "path": "spin.images.fullscreen.text.background",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.fullscreen.text.background.color",
                          "path": "spin.images.fullscreen.text.background.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1236,
                          "level": 6
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "fm-input-range",
                            "type": "number",
                            "max": 100,
                            "min": 0
                          },
                          "_id": "opacity",
                          "_path": "spin.images.fullscreen.text.background.opacity",
                          "path": "spin.images.fullscreen.text.background.opacity",
                          "title": "Opacity",
                          "_order": 1237,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Background",
                      "_order": 1235,
                      "level": 5
                    },
                    "outline": {
                      "_id": "outline",
                      "_path": "spin.images.fullscreen.text.outline",
                      "path": "spin.images.fullscreen.text.outline",
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "_id": "color",
                          "_path": "spin.images.fullscreen.text.outline.color",
                          "path": "spin.images.fullscreen.text.outline.color",
                          "display": {
                            "name": "fm-input",
                            "type": "color"
                          },
                          "title": "Color",
                          "_order": 1239,
                          "level": 6
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "_id": "width",
                          "_path": "spin.images.fullscreen.text.outline.width",
                          "path": "spin.images.fullscreen.text.outline.width",
                          "display": {
                            "name": "fm-input",
                            "type": "number",
                            "min": 0
                          },
                          "title": "Width",
                          "_order": 1240,
                          "level": 6
                        }
                      },
                      "display": {
                        "name": "fm-input-group"
                      },
                      "title": "Outline",
                      "_order": 1238,
                      "level": 5
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "_id": "size",
                      "_path": "spin.images.fullscreen.text.size",
                      "path": "spin.images.fullscreen.text.size",
                      "display": {
                        "name": "fm-input",
                        "type": "text"
                      },
                      "title": "Size",
                      "_order": 1241,
                      "level": 5
                    },
                    "position": {
                      "type": "string",
                      "enum": [
                        "north",
                        "northeast",
                        "northwest",
                        "center",
                        "south",
                        "southeast",
                        "southwest",
                        "east",
                        "west"
                      ],
                      "_id": "position",
                      "_path": "spin.images.fullscreen.text.position",
                      "path": "spin.images.fullscreen.text.position",
                      "display": {
                        "name": "fm-select",
                        "options": [
                          {
                            "id": "north",
                            "title": "North"
                          },
                          {
                            "id": "northeast",
                            "title": "Northeast"
                          },
                          {
                            "id": "northwest",
                            "title": "Northwest"
                          },
                          {
                            "id": "center",
                            "title": "Center"
                          },
                          {
                            "id": "south",
                            "title": "South"
                          },
                          {
                            "id": "southeast",
                            "title": "Southeast"
                          },
                          {
                            "id": "southwest",
                            "title": "Southwest"
                          },
                          {
                            "id": "east",
                            "title": "East"
                          },
                          {
                            "id": "west",
                            "title": "West"
                          }
                        ]
                      },
                      "title": "Position",
                      "_order": 1242,
                      "level": 5
                    }
                  },
                  "display": {
                    "name": "fm-input-group"
                  },
                  "_order": 1225,
                  "level": 4
                }
              },
              "_order": 1183,
              "level": 3
            }
          },
          "_order": 1062,
          "level": 2
        },
        "autospin": {
          "type": "string",
          "enum": [
            "once",
            "twice",
            "infinite",
            "off"
          ],
          "_id": "autospin",
          "_path": "spin.autospin",
          "path": "spin.autospin",
          "display": {
            "name": "fm-select",
            "options": [
              {
                "id": "once",
                "title": "Once"
              },
              {
                "id": "twice",
                "title": "Twice"
              },
              {
                "id": "infinite",
                "title": "Infinite"
              },
              {
                "id": "off",
                "title": "Off"
              }
            ]
          },
          "title": "Autospin",
          "_order": 1243,
          "level": 2
        },
        "autospinSpeed": {
          "type": "number",
          "_id": "autospinSpeed",
          "_path": "spin.autospinSpeed",
          "path": "spin.autospinSpeed",
          "display": {
            "name": "fm-input",
            "type": "number"
          },
          "title": "Autospin speed",
          "_order": 1244,
          "level": 2
        },
        "autospinStart": {
          "type": "string",
          "_id": "autospinStart",
          "_path": "spin.autospinStart",
          "path": "spin.autospinStart",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Autospin start",
          "_order": 1245,
          "level": 2
        },
        "autospinDirection": {
          "type": "string",
          "enum": [
            "clockwise",
            "anticlockwise",
            "alternate-clockwise",
            "alternate-aniticlockwise"
          ],
          "_id": "autospinDirection",
          "_path": "spin.autospinDirection",
          "path": "spin.autospinDirection",
          "display": {
            "name": "fm-select",
            "options": [
              {
                "id": "clockwise",
                "title": "Clockwise"
              },
              {
                "id": "anticlockwise",
                "title": "Anticlockwise"
              },
              {
                "id": "alternate-clockwise",
                "title": "Alternate clockwise"
              },
              {
                "id": "alternate-aniticlockwise",
                "title": "Alternate aniticlockwise"
              }
            ]
          },
          "title": "Autospin direction",
          "_order": 1246,
          "level": 2
        },
        "fullscreen": {
          "type": "boolean",
          "_id": "fullscreen",
          "_path": "spin.fullscreen",
          "path": "spin.fullscreen",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Fullscreen",
          "_order": 1247,
          "level": 2
        },
        "zoom": {
          "type": "number",
          "minimum": 0,
          "_id": "zoom",
          "_path": "spin.zoom",
          "path": "spin.zoom",
          "display": {
            "name": "fm-input",
            "type": "number",
            "min": 0
          },
          "title": "Zoom",
          "_order": 1248,
          "level": 2
        },
        "initializeOn": {
          "type": "string",
          "enum": [
            "load",
            "hover",
            "click"
          ],
          "_id": "initializeOn",
          "_path": "spin.initializeOn",
          "path": "spin.initializeOn",
          "display": {
            "name": "fm-radio-list",
            "options": [
              {
                "id": "load",
                "title": "Load"
              },
              {
                "id": "hover",
                "title": "Hover"
              },
              {
                "id": "click",
                "title": "Click"
              }
            ]
          },
          "title": "Initialize on",
          "_order": 1249,
          "level": 2
        },
        "speed": {
          "type": "number",
          "minimum": 0,
          "maximum": 100,
          "_id": "speed",
          "_path": "spin.speed",
          "path": "spin.speed",
          "display": {
            "name": "fm-input",
            "type": "number",
            "max": 100,
            "min": 0
          },
          "title": "Speed",
          "_order": 1250,
          "level": 2
        },
        "hint": {
          "type": "boolean",
          "_id": "hint",
          "_path": "spin.hint",
          "path": "spin.hint",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Hint",
          "_order": 1251,
          "level": 2
        },
        "startColumn": {
          "oneOf": [
            {
              "type": "number",
              "minimum": 1
            },
            {
              "type": "string",
              "enum": [
                "auto"
              ]
            }
          ],
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+|auto$/",
            "hint": "[Number] or \"auto\""
          },
          "_id": "startColumn",
          "_path": "spin.startColumn",
          "path": "spin.startColumn",
          "title": "Start column",
          "_order": 1252,
          "level": 2
        },
        "startRow": {
          "oneOf": [
            {
              "type": "number",
              "minimum": 1
            },
            {
              "type": "string",
              "enum": [
                "auto"
              ]
            }
          ],
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+|auto$/",
            "hint": "[Number] or \"auto\""
          },
          "_id": "startRow",
          "_path": "spin.startRow",
          "path": "spin.startRow",
          "title": "Start row",
          "_order": 1253,
          "level": 2
        },
        "spin": {
          "type": "string",
          "enum": [
            "drag",
            "hover"
          ],
          "_id": "spin",
          "_path": "spin.spin",
          "path": "spin.spin",
          "display": {
            "name": "fm-radio-list",
            "options": [
              {
                "id": "drag",
                "title": "Drag"
              },
              {
                "id": "hover",
                "title": "Hover"
              }
            ]
          },
          "title": "Spin",
          "_order": 1254,
          "level": 2
        },
        "rightClick": {
          "type": "boolean",
          "_id": "rightClick",
          "_path": "spin.rightClick",
          "path": "spin.rightClick",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Right click",
          "_order": 1255,
          "level": 2
        },
        "mousewheelStep": {
          "type": "number",
          "_id": "mousewheelStep",
          "_path": "spin.mousewheelStep",
          "path": "spin.mousewheelStep",
          "display": {
            "name": "fm-input",
            "type": "number"
          },
          "title": "Mousewheel step",
          "_order": 1256,
          "level": 2
        },
        "loopColumn": {
          "type": "boolean",
          "_id": "loopColumn",
          "_path": "spin.loopColumn",
          "path": "spin.loopColumn",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Loop column",
          "_order": 1257,
          "level": 2
        },
        "loopRow": {
          "type": "boolean",
          "_id": "loopRow",
          "_path": "spin.loopRow",
          "path": "spin.loopRow",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Loop row",
          "_order": 1258,
          "level": 2
        },
        "autospinStop": {
          "type": "string",
          "enum": [
            "click",
            "hover",
            "never"
          ],
          "_id": "autospinStop",
          "_path": "spin.autospinStop",
          "path": "spin.autospinStop",
          "display": {
            "name": "fm-radio-list",
            "options": [
              {
                "id": "click",
                "title": "Click"
              },
              {
                "id": "hover",
                "title": "Hover"
              },
              {
                "id": "never",
                "title": "Never"
              }
            ]
          },
          "title": "Autospin stop",
          "_order": 1259,
          "level": 2
        },
        "swapRowsColumns": {
          "type": "boolean",
          "_id": "swapRowsColumns",
          "_path": "spin.swapRowsColumns",
          "path": "spin.swapRowsColumns",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Swap rows columns",
          "_order": 1260,
          "level": 2
        },
        "retina": {
          "type": "boolean",
          "_id": "retina",
          "_path": "spin.retina",
          "path": "spin.retina",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Retina",
          "_order": 1261,
          "level": 2
        },
        "loadingText": {
          "type": "string",
          "_id": "loadingText",
          "_path": "spin.loadingText",
          "path": "spin.loadingText",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Loading text",
          "_order": 1262,
          "level": 2
        },
        "fullscreenLoadingText": {
          "type": "string",
          "_id": "fullscreenLoadingText",
          "_path": "spin.fullscreenLoadingText",
          "path": "spin.fullscreenLoadingText",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Fullscreen loading text",
          "_order": 1263,
          "level": 2
        },
        "hintText": {
          "type": "string",
          "_id": "hintText",
          "_path": "spin.hintText",
          "path": "spin.hintText",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Hint text",
          "_order": 1264,
          "level": 2
        },
        "mobileHintText": {
          "type": "string",
          "_id": "mobileHintText",
          "_path": "spin.mobileHintText",
          "path": "spin.mobileHintText",
          "display": {
            "name": "fm-input",
            "type": "text"
          },
          "title": "Mobile hint text",
          "_order": 1265,
          "level": 2
        },
        "reverseRotation": {
          "type": "string",
          "enum": [
            "row",
            "column",
            "both",
            "off"
          ],
          "_id": "reverseRotation",
          "_path": "spin.reverseRotation",
          "path": "spin.reverseRotation",
          "display": {
            "name": "fm-select",
            "options": [
              {
                "id": "row",
                "title": "Row"
              },
              {
                "id": "column",
                "title": "Column"
              },
              {
                "id": "both",
                "title": "Both"
              },
              {
                "id": "off",
                "title": "Off"
              }
            ]
          },
          "title": "Reverse rotation",
          "_order": 1266,
          "level": 2
        },
        "emulate3D": {
          "type": "boolean",
          "_id": "emulate3D",
          "_path": "spin.emulate3D",
          "path": "spin.emulate3D",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Emulate 3D",
          "_order": 1267,
          "level": 2
        }
      },
      "_order": 1061,
      "level": 1
    }
  },
  "_id": "",
  "path": "",
  "_order": 1000,
  "level": 0
}
