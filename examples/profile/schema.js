window.schema = {
  "properties": {
    "image": {
      "title": "Image options",
      "properties": {
        "profile": {
          "type": "string",
          "display": {
            "name": "input",
            "type": "text"
          },
          "title": "Profile",
          "path": "image.profile",
          "level": 2,
          "order": 1002
        },
        "format": {
          "type": "string",
          "enum": [
            "png",
            "jpg",
            "webp"
          ],
          "display": {
            "labels": {
              "png": "PNG",
              "webp": "WebP",
              "jpg": "JPG"
            },
            "name": "radio-list",
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
            ]
          },
          "title": "Format",
          "path": "image.format",
          "level": 2,
          "order": 1003
        },
        "scale": {
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
                "name": "input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/"
              },
              "title": "Width",
              "path": "image.scale.width",
              "level": 3,
              "order": 1005
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
                "name": "input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/"
              },
              "title": "Height",
              "path": "image.scale.height",
              "level": 3,
              "order": 1006
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
                "name": "select",
                "labels": {
                  "ignore": "Ignore aspect ratio",
                  "noup": "No upscale"
                },
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
                ]
              },
              "title": "Option",
              "path": "image.scale.option",
              "level": 3,
              "order": 1007
            }
          },
          "description": "Scale the image to specified width and height",
          "additionalProperties": false,
          "title": "Scaling options",
          "display": "group:fieldset",
          "group": "scale",
          "path": "image.scale",
          "level": 2,
          "order": 1004
        },
        "crop": {
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
                "name": "input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/"
              },
              "title": "Width",
              "path": "image.crop.width",
              "level": 3,
              "order": 1009
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
                "name": "input",
                "type": "text",
                "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/"
              },
              "title": "Height",
              "path": "image.crop.height",
              "level": 3,
              "order": 1010
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
                "name": "input",
                "type": "text",
                "pattern": "/^[\\+\\-]?\\d+(\\.\\d+)?(%|px)?|center$/"
              },
              "title": "X",
              "path": "image.crop.x",
              "level": 3,
              "order": 1011
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
              "display": false,
              "title": "Y",
              "path": "image.crop.y",
              "level": 3,
              "order": 1012
            }
          },
          "description": "Crop the image",
          "additionalProperties": false,
          "title": "Crop options",
          "display": "group:fieldset",
          "path": "image.crop",
          "level": 2,
          "order": 1008
        },
        "thumbnail": {
          "type": "number",
          "minimum": 1,
          "maximum": 256,
          "description": "Create square thumbnail of specified size",
          "display": {
            "name": "input",
            "type": "number",
            "max": 256,
            "min": 1
          },
          "title": "Thumbnail",
          "path": "image.thumbnail",
          "level": 2,
          "order": 1013
        },
        "tile": {
          "hidden": true,
          "properties": {
            "width": {
              "type": "number",
              "minimum": 1,
              "description": "Tile width",
              "display": {
                "name": "input",
                "type": "number",
                "min": 1
              },
              "title": "Width",
              "path": "image.tile.width",
              "level": 3,
              "order": 1015
            },
            "height": {
              "type": "number",
              "minimum": 1,
              "description": "Tile height",
              "display": {
                "name": "input",
                "type": "number",
                "min": 1
              },
              "title": "Height",
              "path": "image.tile.height",
              "level": 3,
              "order": 1016
            },
            "number": {
              "type": "number",
              "minimum": 0,
              "display": {
                "name": "input",
                "type": "number",
                "min": 0
              },
              "title": "Number",
              "path": "image.tile.number",
              "level": 3,
              "order": 1017
            }
          },
          "description": "Tile the image",
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "path": "image.tile",
          "level": 2,
          "order": 1014
        },
        "rotate": {
          "type": "number",
          "description": "Rotate image (degrees)",
          "minimum": -180,
          "maximum": 180,
          "display": {
            "name": "input",
            "type": "number",
            "max": 180,
            "min": -180
          },
          "title": "Rotate",
          "path": "image.rotate",
          "level": 2,
          "order": 1018
        },
        "subsampling": {
          "type": "string",
          "enum": [
            "4:4:4",
            "4:2:2",
            "4:2:0"
          ],
          "display": {
            "name": "radio-list",
            "options": [
              {
                "id": "4:4:4",
                "title": "4:4:4"
              },
              {
                "id": "4:2:2",
                "title": "4:2:2"
              },
              {
                "id": "4:2:0",
                "title": "4:2:0"
              }
            ]
          },
          "title": "Subsampling",
          "path": "image.subsampling",
          "level": 2,
          "order": 1019
        },
        "quality": {
          "type": "number",
          "description": "Image quality",
          "minimum": 0,
          "maximum": 100,
          "display": {
            "name": "input",
            "type": "number",
            "max": 100,
            "min": 0
          },
          "title": "Quality",
          "path": "image.quality",
          "level": 2,
          "order": 1020
        },
        "png": {
          "properties": {
            "compression": {
              "type": "number",
              "description": "PNG compression",
              "minimum": 0,
              "maximum": 9,
              "display": {
                "name": "input",
                "type": "number",
                "max": 9,
                "min": 0
              },
              "title": "Compression",
              "path": "image.png.compression",
              "level": 3,
              "order": 1022
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
              "path": "image.png.filtering",
              "level": 3,
              "order": 1023
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "path": "image.png",
          "level": 2,
          "order": 1021
        },
        "webp": {
          "properties": {
            "fallback": {
              "type": "string",
              "enum": [
                "png",
                "jpg"
              ],
              "display": {
                "name": "radio-list",
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
              "path": "image.webp.fallback",
              "level": 3,
              "order": 1025
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "path": "image.webp",
          "level": 2,
          "order": 1024
        },
        "progressive": {
          "type": "boolean",
          "description": "Create progressive image",
          "display": {
            "name": "input",
            "type": "checkbox"
          },
          "title": "Progressive",
          "path": "image.progressive",
          "level": 2,
          "order": 1026
        },
        "brightness": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "display": {
            "name": "input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Brightness",
          "path": "image.brightness",
          "level": 2,
          "order": 1027
        },
        "contrast": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "display": {
            "name": "input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Contrast",
          "path": "image.contrast",
          "level": 2,
          "order": 1028
        },
        "exposure": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "display": {
            "name": "input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Exposure",
          "path": "image.exposure",
          "level": 2,
          "order": 1029
        },
        "grayscale": {
          "type": "boolean",
          "description": "Transform the image to black and white",
          "display": {
            "name": "input",
            "type": "checkbox"
          },
          "title": "Grayscale",
          "path": "image.grayscale",
          "level": 2,
          "order": 1030
        },
        "blur": {
          "type": "number",
          "description": "Apply a blur effect to the image",
          "display": {
            "name": "input",
            "type": "number"
          },
          "title": "Blur",
          "path": "image.blur",
          "level": 2,
          "order": 1031
        },
        "tiltshift": {
          "type": "boolean",
          "description": "Apply a tilt-shift effect to the image",
          "display": {
            "name": "input",
            "type": "checkbox"
          },
          "title": "Tiltshift",
          "path": "image.tiltshift",
          "level": 2,
          "order": 1032
        },
        "frame": {
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
              "display": {
                "name": "select",
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
                ]
              },
              "title": "Style",
              "path": "image.frame.style",
              "level": 3,
              "order": 1034
            },
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input",
                "type": "color"
              },
              "title": "Color",
              "path": "image.frame.color",
              "level": 3,
              "order": 1035
            },
            "width": {
              "type": "number",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Width",
              "path": "image.frame.width",
              "level": 3,
              "order": 1036
            },
            "rim": {
              "color": {
                "type": "string"
              },
              "width": {
                "type": "number"
              },
              "display": false,
              "title": "Rim",
              "path": "image.frame.rim",
              "level": 3,
              "order": 1037
            }
          },
          "additionalProperties": false,
          "required": [
            "style"
          ],
          "display": {
            "name": "group"
          },
          "path": "image.frame",
          "level": 2,
          "order": 1033
        },
        "text": {
          "properties": {
            "style": {
              "type": "string",
              "enum": [
                "simple",
                "soft",
                "none"
              ],
              "display": {
                "name": "radio-list",
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
              "path": "image.text.style",
              "level": 3,
              "order": 1039
            },
            "font": {
              "properties": {
                "family": {
                  "type": "string",
                  "display": {
                    "name": "input",
                    "type": "text"
                  },
                  "title": "Family",
                  "path": "image.text.font.family",
                  "level": 4,
                  "order": 1041
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
                  "display": {
                    "name": "select",
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
                  "path": "image.text.font.weight",
                  "level": 4,
                  "order": 1042
                },
                "style": {
                  "type": "string",
                  "enum": [
                    "normal",
                    "italic"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "image.text.font.style",
                  "level": 4,
                  "order": 1043
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
                  "display": false,
                  "title": "Size",
                  "path": "image.text.font.size",
                  "level": 4,
                  "order": 1044
                }
              },
              "display": {
                "name": "group"
              },
              "path": "image.text.font",
              "level": 3,
              "order": 1040
            },
            "text": {
              "type": "string",
              "maxLength": 100,
              "display": {
                "name": "input",
                "type": "text",
                "maxlength": 100
              },
              "title": "Text",
              "path": "image.text.text",
              "level": 3,
              "order": 1045
            },
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input",
                "type": "color"
              },
              "title": "Color",
              "path": "image.text.color",
              "level": 3,
              "order": 1046
            },
            "opacity": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Opacity",
              "path": "image.text.opacity",
              "level": 3,
              "order": 1047
            },
            "background": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "image.text.background.color",
                  "level": 4,
                  "order": 1049
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 100,
                    "min": 0
                  },
                  "title": "Opacity",
                  "path": "image.text.background.opacity",
                  "level": 4,
                  "order": 1050
                }
              },
              "display": {
                "name": "group"
              },
              "path": "image.text.background",
              "level": 3,
              "order": 1048
            },
            "outline": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "image.text.outline.color",
                  "level": 4,
                  "order": 1052
                },
                "width": {
                  "type": "number",
                  "minimum": 0,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 0
                  },
                  "title": "Width",
                  "path": "image.text.outline.width",
                  "level": 4,
                  "order": 1053
                }
              },
              "display": {
                "name": "group"
              },
              "path": "image.text.outline",
              "level": 3,
              "order": 1051
            },
            "size": {
              "type": "string",
              "format": "Percentage",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Size",
              "path": "image.text.size",
              "level": 3,
              "order": 1054
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
              "display": {
                "name": "select",
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
              "path": "image.text.position",
              "level": 3,
              "order": 1055
            }
          },
          "required": [
            "text"
          ],
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "path": "image.text",
          "level": 2,
          "order": 1038
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
          "display": {
            "name": "select",
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
          "path": "image.colortone",
          "level": 2,
          "order": 1056
        },
        "vignette": {
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input",
                "type": "color"
              },
              "title": "Color",
              "path": "image.vignette.color",
              "level": 3,
              "order": 1058
            },
            "value": {
              "type": "number",
              "minimum": 0,
              "maximum": 1,
              "display": {
                "name": "input",
                "type": "range",
                "min": 0,
                "max": 1,
                "step": 0.01
              },
              "title": "Value",
              "path": "image.vignette.value",
              "level": 3,
              "order": 1059
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "path": "image.vignette",
          "level": 2,
          "order": 1057
        },
        "testText": {
          "type": "string",
          "maxLength": 255,
          "order": 1,
          "display": {
            "name": "input",
            "type": "text",
            "maxlength": 255
          },
          "title": "Test text",
          "path": "image.testText",
          "level": 2
        },
        "testRange": {
          "display": {
            "name": "input",
            "type": "range",
            "min": 0,
            "max": 1,
            "step": 0.01
          },
          "order": 2,
          "title": "Test range",
          "path": "image.testRange",
          "level": 2
        },
        "testCheckbox": {
          "type": "boolean",
          "order": 2,
          "display": {
            "name": "input",
            "type": "checkbox"
          },
          "title": "Test checkbox",
          "path": "image.testCheckbox",
          "level": 2
        }
      },
      "display": "group",
      "path": "image",
      "level": 1,
      "order": 1001
    },
    "spin": {
      "title": "Spin options",
      "properties": {
        "general": {
          "title": "General",
          "display": "group",
          "path": "spin.general",
          "order": 0,
          "properties": {
            "autospin": {
              "type": "string",
              "enum": [
                "once",
                "twice",
                "infinite",
                "off"
              ],
              "display": {
                "name": "select",
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
              "path": "spin.autospin",
              "level": 2,
              "order": 1239
            },
            "autospinSpeed": {
              "type": "number",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Autospin speed",
              "path": "spin.autospinSpeed",
              "level": 2,
              "order": 1240
            },
            "autospinStart": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Autospin start",
              "path": "spin.autospinStart",
              "level": 2,
              "order": 1241
            },
            "autospinDirection": {
              "type": "string",
              "enum": [
                "clockwise",
                "anticlockwise",
                "alternate-clockwise",
                "alternate-aniticlockwise"
              ],
              "display": {
                "name": "select",
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
              "path": "spin.autospinDirection",
              "level": 2,
              "order": 1242
            },
            "fullscreen": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Fullscreen",
              "path": "spin.fullscreen",
              "level": 2,
              "order": 1243
            },
            "zoom": {
              "type": "number",
              "minimum": 0,
              "display": {
                "name": "input",
                "type": "number",
                "min": 0
              },
              "title": "Zoom",
              "path": "spin.zoom",
              "level": 2,
              "order": 1244
            },
            "initializeOn": {
              "type": "string",
              "enum": [
                "load",
                "hover",
                "click"
              ],
              "display": {
                "name": "radio-list",
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
              "path": "spin.initializeOn",
              "level": 2,
              "order": 1245
            },
            "speed": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Speed",
              "path": "spin.speed",
              "level": 2,
              "order": 1246
            },
            "hint": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Hint",
              "path": "spin.hint",
              "level": 2,
              "order": 1247
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
              "display": false,
              "title": "Start column",
              "path": "spin.startColumn",
              "level": 2,
              "order": 1248
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
              "display": false,
              "title": "Start row",
              "path": "spin.startRow",
              "level": 2,
              "order": 1249
            },
            "spin": {
              "type": "string",
              "enum": [
                "drag",
                "hover"
              ],
              "display": {
                "name": "radio-list",
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
              "path": "spin.spin",
              "level": 2,
              "order": 1250
            },
            "rightClick": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Right click",
              "path": "spin.rightClick",
              "level": 2,
              "order": 1251
            },
            "mousewheelStep": {
              "type": "number",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Mousewheel step",
              "path": "spin.mousewheelStep",
              "level": 2,
              "order": 1252
            },
            "loopColumn": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Loop column",
              "path": "spin.loopColumn",
              "level": 2,
              "order": 1253
            },
            "loopRow": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Loop row",
              "path": "spin.loopRow",
              "level": 2,
              "order": 1254
            },
            "autospinStop": {
              "type": "string",
              "enum": [
                "click",
                "hover",
                "never"
              ],
              "display": {
                "name": "radio-list",
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
              "path": "spin.autospinStop",
              "level": 2,
              "order": 1255
            },
            "swapRowsColumns": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Swap rows columns",
              "path": "spin.swapRowsColumns",
              "level": 2,
              "order": 1256
            },
            "retina": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Retina",
              "path": "spin.retina",
              "level": 2,
              "order": 1257
            },
            "loadingText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Loading text",
              "path": "spin.loadingText",
              "level": 2,
              "order": 1258
            },
            "fullscreenLoadingText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Fullscreen loading text",
              "path": "spin.fullscreenLoadingText",
              "level": 2,
              "order": 1259
            },
            "hintText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Hint text",
              "path": "spin.hintText",
              "level": 2,
              "order": 1260
            },
            "mobileHintText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Mobile hint text",
              "path": "spin.mobileHintText",
              "level": 2,
              "order": 1261
            },
            "reverseRotation": {
              "type": "string",
              "enum": [
                "row",
                "column",
                "both",
                "off"
              ],
              "display": {
                "name": "select",
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
              "path": "spin.reverseRotation",
              "level": 2,
              "order": 1262
            },
            "emulate3D": {
              "type": "boolean",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Emulate3D",
              "path": "spin.emulate3D",
              "level": 2,
              "order": 1263
            }
          }
        },
        "main": {
          "title": "Main image",
          "properties": {
            "profile": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Profile",
              "path": "spin.images.main.profile",
              "level": 4,
              "order": 1063
            },
            "format": {
              "type": "string",
              "enum": [
                "png",
                "jpg",
                "webp"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "png",
                    "title": "Png"
                  },
                  {
                    "id": "jpg",
                    "title": "Jpg"
                  },
                  {
                    "id": "webp",
                    "title": "Webp"
                  }
                ]
              },
              "title": "Format",
              "path": "spin.images.main.format",
              "level": 4,
              "order": 1064
            },
            "scale": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.main.scale.width",
                  "level": 5,
                  "order": 1066
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.main.scale.height",
                  "level": 5,
                  "order": 1067
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
                  "path": "spin.images.main.scale.option",
                  "level": 5,
                  "order": 1068
                }
              },
              "description": "Scale the image to specified width and height",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.scale",
              "level": 4,
              "order": 1065
            },
            "crop": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.main.crop.width",
                  "level": 5,
                  "order": 1070
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.main.crop.height",
                  "level": 5,
                  "order": 1071
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
                  "display": false,
                  "title": "X",
                  "path": "spin.images.main.crop.x",
                  "level": 5,
                  "order": 1072
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
                  "display": false,
                  "title": "Y",
                  "path": "spin.images.main.crop.y",
                  "level": 5,
                  "order": 1073
                }
              },
              "description": "Crop the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.crop",
              "level": 4,
              "order": 1069
            },
            "thumbnail": {
              "type": "number",
              "minimum": 1,
              "maximum": 256,
              "description": "Create square thumbnail of specified size",
              "display": {
                "name": "input",
                "type": "number",
                "max": 256,
                "min": 1
              },
              "title": "Thumbnail",
              "path": "spin.images.main.thumbnail",
              "level": 4,
              "order": 1074
            },
            "tile": {
              "hidden": true,
              "properties": {
                "width": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile width",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Width",
                  "path": "spin.images.main.tile.width",
                  "level": 5,
                  "order": 1076
                },
                "height": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile height",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Height",
                  "path": "spin.images.main.tile.height",
                  "level": 5,
                  "order": 1077
                },
                "number": {
                  "type": "number",
                  "minimum": 0,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 0
                  },
                  "title": "Number",
                  "path": "spin.images.main.tile.number",
                  "level": 5,
                  "order": 1078
                }
              },
              "description": "Tile the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.tile",
              "level": 4,
              "order": 1075
            },
            "rotate": {
              "type": "number",
              "description": "Rotate image (degrees)",
              "minimum": -180,
              "maximum": 180,
              "display": {
                "name": "input",
                "type": "number",
                "max": 180,
                "min": -180
              },
              "title": "Rotate",
              "path": "spin.images.main.rotate",
              "level": 4,
              "order": 1079
            },
            "subsampling": {
              "type": "string",
              "enum": [
                "4:4:4",
                "4:2:2",
                "4:2:0"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "4:4:4",
                    "title": "4:4:4"
                  },
                  {
                    "id": "4:2:2",
                    "title": "4:2:2"
                  },
                  {
                    "id": "4:2:0",
                    "title": "4:2:0"
                  }
                ]
              },
              "title": "Subsampling",
              "path": "spin.images.main.subsampling",
              "level": 4,
              "order": 1080
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Quality",
              "path": "spin.images.main.quality",
              "level": 4,
              "order": 1081
            },
            "png": {
              "properties": {
                "compression": {
                  "type": "number",
                  "description": "PNG compression",
                  "minimum": 0,
                  "maximum": 9,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 9,
                    "min": 0
                  },
                  "title": "Compression",
                  "path": "spin.images.main.png.compression",
                  "level": 5,
                  "order": 1083
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
                  "path": "spin.images.main.png.filtering",
                  "level": 5,
                  "order": 1084
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.png",
              "level": 4,
              "order": 1082
            },
            "webp": {
              "properties": {
                "fallback": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.main.webp.fallback",
                  "level": 5,
                  "order": 1086
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.webp",
              "level": 4,
              "order": 1085
            },
            "progressive": {
              "type": "boolean",
              "description": "Create progressive image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Progressive",
              "path": "spin.images.main.progressive",
              "level": 4,
              "order": 1087
            },
            "brightness": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Brightness",
              "path": "spin.images.main.brightness",
              "level": 4,
              "order": 1088
            },
            "contrast": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Contrast",
              "path": "spin.images.main.contrast",
              "level": 4,
              "order": 1089
            },
            "exposure": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Exposure",
              "path": "spin.images.main.exposure",
              "level": 4,
              "order": 1090
            },
            "grayscale": {
              "type": "boolean",
              "description": "Transform the image to black and white",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Grayscale",
              "path": "spin.images.main.grayscale",
              "level": 4,
              "order": 1091
            },
            "blur": {
              "type": "number",
              "description": "Apply a blur effect to the image",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Blur",
              "path": "spin.images.main.blur",
              "level": 4,
              "order": 1092
            },
            "tiltshift": {
              "type": "boolean",
              "description": "Apply a tilt-shift effect to the image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Tiltshift",
              "path": "spin.images.main.tiltshift",
              "level": 4,
              "order": 1093
            },
            "frame": {
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
                  "display": {
                    "name": "select",
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
                    ]
                  },
                  "title": "Style",
                  "path": "spin.images.main.frame.style",
                  "level": 5,
                  "order": 1095
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.main.frame.color",
                  "level": 5,
                  "order": 1096
                },
                "width": {
                  "type": "number",
                  "display": {
                    "name": "input",
                    "type": "number"
                  },
                  "title": "Width",
                  "path": "spin.images.main.frame.width",
                  "level": 5,
                  "order": 1097
                },
                "rim": {
                  "color": {
                    "type": "string"
                  },
                  "width": {
                    "type": "number"
                  },
                  "display": false,
                  "title": "Rim",
                  "path": "spin.images.main.frame.rim",
                  "level": 5,
                  "order": 1098
                }
              },
              "additionalProperties": false,
              "required": [
                "style"
              ],
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.frame",
              "level": 4,
              "order": 1094
            },
            "text": {
              "properties": {
                "style": {
                  "type": "string",
                  "enum": [
                    "simple",
                    "soft",
                    "none"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.main.text.style",
                  "level": 5,
                  "order": 1100
                },
                "font": {
                  "properties": {
                    "family": {
                      "type": "string",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Family",
                      "path": "spin.images.main.text.font.family",
                      "level": 6,
                      "order": 1102
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
                      "display": {
                        "name": "select",
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
                      "path": "spin.images.main.text.font.weight",
                      "level": 6,
                      "order": 1103
                    },
                    "style": {
                      "type": "string",
                      "enum": [
                        "normal",
                        "italic"
                      ],
                      "display": {
                        "name": "radio-list",
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
                      "path": "spin.images.main.text.font.style",
                      "level": 6,
                      "order": 1104
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
                      "display": false,
                      "title": "Size",
                      "path": "spin.images.main.text.font.size",
                      "level": 6,
                      "order": 1105
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.main.text.font",
                  "level": 5,
                  "order": 1101
                },
                "text": {
                  "type": "string",
                  "maxLength": 100,
                  "display": {
                    "name": "input",
                    "type": "text",
                    "maxlength": 100
                  },
                  "title": "Text",
                  "path": "spin.images.main.text.text",
                  "level": 5,
                  "order": 1106
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.main.text.color",
                  "level": 5,
                  "order": 1107
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 100,
                    "min": 0
                  },
                  "title": "Opacity",
                  "path": "spin.images.main.text.opacity",
                  "level": 5,
                  "order": 1108
                },
                "background": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.main.text.background.color",
                      "level": 6,
                      "order": 1110
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "path": "spin.images.main.text.background.opacity",
                      "level": 6,
                      "order": 1111
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.main.text.background",
                  "level": 5,
                  "order": 1109
                },
                "outline": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.main.text.outline.color",
                      "level": 6,
                      "order": 1113
                    },
                    "width": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "min": 0
                      },
                      "title": "Width",
                      "path": "spin.images.main.text.outline.width",
                      "level": 6,
                      "order": 1114
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.main.text.outline",
                  "level": 5,
                  "order": 1112
                },
                "size": {
                  "type": "string",
                  "format": "Percentage",
                  "display": {
                    "name": "input",
                    "type": "text"
                  },
                  "title": "Size",
                  "path": "spin.images.main.text.size",
                  "level": 5,
                  "order": 1115
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
                  "display": {
                    "name": "select",
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
                  "path": "spin.images.main.text.position",
                  "level": 5,
                  "order": 1116
                }
              },
              "required": [
                "text"
              ],
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.text",
              "level": 4,
              "order": 1099
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
              "display": {
                "name": "select",
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
              "path": "spin.images.main.colortone",
              "level": 4,
              "order": 1117
            },
            "vignette": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.main.vignette.color",
                  "level": 5,
                  "order": 1119
                },
                "value": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 1,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 1,
                    "min": 0
                  },
                  "title": "Value",
                  "path": "spin.images.main.vignette.value",
                  "level": 5,
                  "order": 1120
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.main.vignette",
              "level": 4,
              "order": 1118
            }
          },
          "display": {
            "name": "group"
          },
          "path": "spin.images.main",
          "level": 3,
          "order": 1062
        },
        "zoom": {
          "title": "Zoom image",
          "properties": {
            "profile": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Profile",
              "path": "spin.images.zoom.profile",
              "level": 4,
              "order": 1122
            },
            "format": {
              "type": "string",
              "enum": [
                "png",
                "jpg",
                "webp"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "png",
                    "title": "Png"
                  },
                  {
                    "id": "jpg",
                    "title": "Jpg"
                  },
                  {
                    "id": "webp",
                    "title": "Webp"
                  }
                ]
              },
              "title": "Format",
              "path": "spin.images.zoom.format",
              "level": 4,
              "order": 1123
            },
            "scale": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.zoom.scale.width",
                  "level": 5,
                  "order": 1125
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.zoom.scale.height",
                  "level": 5,
                  "order": 1126
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
                  "path": "spin.images.zoom.scale.option",
                  "level": 5,
                  "order": 1127
                }
              },
              "description": "Scale the image to specified width and height",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.scale",
              "level": 4,
              "order": 1124
            },
            "crop": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.zoom.crop.width",
                  "level": 5,
                  "order": 1129
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.zoom.crop.height",
                  "level": 5,
                  "order": 1130
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
                  "display": false,
                  "title": "X",
                  "path": "spin.images.zoom.crop.x",
                  "level": 5,
                  "order": 1131
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
                  "display": false,
                  "title": "Y",
                  "path": "spin.images.zoom.crop.y",
                  "level": 5,
                  "order": 1132
                }
              },
              "description": "Crop the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.crop",
              "level": 4,
              "order": 1128
            },
            "thumbnail": {
              "type": "number",
              "minimum": 1,
              "maximum": 256,
              "description": "Create square thumbnail of specified size",
              "display": {
                "name": "input",
                "type": "number",
                "max": 256,
                "min": 1
              },
              "title": "Thumbnail",
              "path": "spin.images.zoom.thumbnail",
              "level": 4,
              "order": 1133
            },
            "tile": {
              "hidden": true,
              "properties": {
                "width": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile width",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Width",
                  "path": "spin.images.zoom.tile.width",
                  "level": 5,
                  "order": 1135
                },
                "height": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile height",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Height",
                  "path": "spin.images.zoom.tile.height",
                  "level": 5,
                  "order": 1136
                },
                "number": {
                  "type": "number",
                  "minimum": 0,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 0
                  },
                  "title": "Number",
                  "path": "spin.images.zoom.tile.number",
                  "level": 5,
                  "order": 1137
                }
              },
              "description": "Tile the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.tile",
              "level": 4,
              "order": 1134
            },
            "rotate": {
              "type": "number",
              "description": "Rotate image (degrees)",
              "minimum": -180,
              "maximum": 180,
              "display": {
                "name": "input",
                "type": "number",
                "max": 180,
                "min": -180
              },
              "title": "Rotate",
              "path": "spin.images.zoom.rotate",
              "level": 4,
              "order": 1138
            },
            "subsampling": {
              "type": "string",
              "enum": [
                "4:4:4",
                "4:2:2",
                "4:2:0"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "4:4:4",
                    "title": "4:4:4"
                  },
                  {
                    "id": "4:2:2",
                    "title": "4:2:2"
                  },
                  {
                    "id": "4:2:0",
                    "title": "4:2:0"
                  }
                ]
              },
              "title": "Subsampling",
              "path": "spin.images.zoom.subsampling",
              "level": 4,
              "order": 1139
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Quality",
              "path": "spin.images.zoom.quality",
              "level": 4,
              "order": 1140
            },
            "png": {
              "properties": {
                "compression": {
                  "type": "number",
                  "description": "PNG compression",
                  "minimum": 0,
                  "maximum": 9,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 9,
                    "min": 0
                  },
                  "title": "Compression",
                  "path": "spin.images.zoom.png.compression",
                  "level": 5,
                  "order": 1142
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
                  "path": "spin.images.zoom.png.filtering",
                  "level": 5,
                  "order": 1143
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.png",
              "level": 4,
              "order": 1141
            },
            "webp": {
              "properties": {
                "fallback": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.zoom.webp.fallback",
                  "level": 5,
                  "order": 1145
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.webp",
              "level": 4,
              "order": 1144
            },
            "progressive": {
              "type": "boolean",
              "description": "Create progressive image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Progressive",
              "path": "spin.images.zoom.progressive",
              "level": 4,
              "order": 1146
            },
            "brightness": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Brightness",
              "path": "spin.images.zoom.brightness",
              "level": 4,
              "order": 1147
            },
            "contrast": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Contrast",
              "path": "spin.images.zoom.contrast",
              "level": 4,
              "order": 1148
            },
            "exposure": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Exposure",
              "path": "spin.images.zoom.exposure",
              "level": 4,
              "order": 1149
            },
            "grayscale": {
              "type": "boolean",
              "description": "Transform the image to black and white",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Grayscale",
              "path": "spin.images.zoom.grayscale",
              "level": 4,
              "order": 1150
            },
            "blur": {
              "type": "number",
              "description": "Apply a blur effect to the image",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Blur",
              "path": "spin.images.zoom.blur",
              "level": 4,
              "order": 1151
            },
            "tiltshift": {
              "type": "boolean",
              "description": "Apply a tilt-shift effect to the image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Tiltshift",
              "path": "spin.images.zoom.tiltshift",
              "level": 4,
              "order": 1152
            },
            "frame": {
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
                  "display": {
                    "name": "select",
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
                    ]
                  },
                  "title": "Style",
                  "path": "spin.images.zoom.frame.style",
                  "level": 5,
                  "order": 1154
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.zoom.frame.color",
                  "level": 5,
                  "order": 1155
                },
                "width": {
                  "type": "number",
                  "display": {
                    "name": "input",
                    "type": "number"
                  },
                  "title": "Width",
                  "path": "spin.images.zoom.frame.width",
                  "level": 5,
                  "order": 1156
                },
                "rim": {
                  "color": {
                    "type": "string"
                  },
                  "width": {
                    "type": "number"
                  },
                  "display": false,
                  "title": "Rim",
                  "path": "spin.images.zoom.frame.rim",
                  "level": 5,
                  "order": 1157
                }
              },
              "additionalProperties": false,
              "required": [
                "style"
              ],
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.frame",
              "level": 4,
              "order": 1153
            },
            "text": {
              "properties": {
                "style": {
                  "type": "string",
                  "enum": [
                    "simple",
                    "soft",
                    "none"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.zoom.text.style",
                  "level": 5,
                  "order": 1159
                },
                "font": {
                  "properties": {
                    "family": {
                      "type": "string",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Family",
                      "path": "spin.images.zoom.text.font.family",
                      "level": 6,
                      "order": 1161
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
                      "display": {
                        "name": "select",
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
                      "path": "spin.images.zoom.text.font.weight",
                      "level": 6,
                      "order": 1162
                    },
                    "style": {
                      "type": "string",
                      "enum": [
                        "normal",
                        "italic"
                      ],
                      "display": {
                        "name": "radio-list",
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
                      "path": "spin.images.zoom.text.font.style",
                      "level": 6,
                      "order": 1163
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
                      "display": false,
                      "title": "Size",
                      "path": "spin.images.zoom.text.font.size",
                      "level": 6,
                      "order": 1164
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.zoom.text.font",
                  "level": 5,
                  "order": 1160
                },
                "text": {
                  "type": "string",
                  "maxLength": 100,
                  "display": {
                    "name": "input",
                    "type": "text",
                    "maxlength": 100
                  },
                  "title": "Text",
                  "path": "spin.images.zoom.text.text",
                  "level": 5,
                  "order": 1165
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.zoom.text.color",
                  "level": 5,
                  "order": 1166
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 100,
                    "min": 0
                  },
                  "title": "Opacity",
                  "path": "spin.images.zoom.text.opacity",
                  "level": 5,
                  "order": 1167
                },
                "background": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.zoom.text.background.color",
                      "level": 6,
                      "order": 1169
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "path": "spin.images.zoom.text.background.opacity",
                      "level": 6,
                      "order": 1170
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.zoom.text.background",
                  "level": 5,
                  "order": 1168
                },
                "outline": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.zoom.text.outline.color",
                      "level": 6,
                      "order": 1172
                    },
                    "width": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "min": 0
                      },
                      "title": "Width",
                      "path": "spin.images.zoom.text.outline.width",
                      "level": 6,
                      "order": 1173
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.zoom.text.outline",
                  "level": 5,
                  "order": 1171
                },
                "size": {
                  "type": "string",
                  "format": "Percentage",
                  "display": {
                    "name": "input",
                    "type": "text"
                  },
                  "title": "Size",
                  "path": "spin.images.zoom.text.size",
                  "level": 5,
                  "order": 1174
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
                  "display": {
                    "name": "select",
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
                  "path": "spin.images.zoom.text.position",
                  "level": 5,
                  "order": 1175
                }
              },
              "required": [
                "text"
              ],
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.text",
              "level": 4,
              "order": 1158
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
              "display": {
                "name": "select",
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
              "path": "spin.images.zoom.colortone",
              "level": 4,
              "order": 1176
            },
            "vignette": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.zoom.vignette.color",
                  "level": 5,
                  "order": 1178
                },
                "value": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 1,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 1,
                    "min": 0
                  },
                  "title": "Value",
                  "path": "spin.images.zoom.vignette.value",
                  "level": 5,
                  "order": 1179
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.zoom.vignette",
              "level": 4,
              "order": 1177
            }
          },
          "display": {
            "name": "group"
          },
          "path": "spin.images.zoom",
          "level": 3,
          "order": 1121
        },
        "fullscreen": {
          "title": "Fullscreen image",
          "properties": {
            "profile": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Profile",
              "path": "spin.images.fullscreen.profile",
              "level": 4,
              "order": 1181
            },
            "format": {
              "type": "string",
              "enum": [
                "png",
                "jpg",
                "webp"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "png",
                    "title": "Png"
                  },
                  {
                    "id": "jpg",
                    "title": "Jpg"
                  },
                  {
                    "id": "webp",
                    "title": "Webp"
                  }
                ]
              },
              "title": "Format",
              "path": "spin.images.fullscreen.format",
              "level": 4,
              "order": 1182
            },
            "scale": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.fullscreen.scale.width",
                  "level": 5,
                  "order": 1184
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.fullscreen.scale.height",
                  "level": 5,
                  "order": 1185
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
                  "path": "spin.images.fullscreen.scale.option",
                  "level": 5,
                  "order": 1186
                }
              },
              "description": "Scale the image to specified width and height",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.scale",
              "level": 4,
              "order": 1183
            },
            "crop": {
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
                  "display": false,
                  "title": "Width",
                  "path": "spin.images.fullscreen.crop.width",
                  "level": 5,
                  "order": 1188
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
                  "display": false,
                  "title": "Height",
                  "path": "spin.images.fullscreen.crop.height",
                  "level": 5,
                  "order": 1189
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
                  "display": false,
                  "title": "X",
                  "path": "spin.images.fullscreen.crop.x",
                  "level": 5,
                  "order": 1190
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
                  "display": false,
                  "title": "Y",
                  "path": "spin.images.fullscreen.crop.y",
                  "level": 5,
                  "order": 1191
                }
              },
              "description": "Crop the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.crop",
              "level": 4,
              "order": 1187
            },
            "thumbnail": {
              "type": "number",
              "minimum": 1,
              "maximum": 256,
              "description": "Create square thumbnail of specified size",
              "display": {
                "name": "input",
                "type": "number",
                "max": 256,
                "min": 1
              },
              "title": "Thumbnail",
              "path": "spin.images.fullscreen.thumbnail",
              "level": 4,
              "order": 1192
            },
            "tile": {
              "hidden": true,
              "properties": {
                "width": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile width",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Width",
                  "path": "spin.images.fullscreen.tile.width",
                  "level": 5,
                  "order": 1194
                },
                "height": {
                  "type": "number",
                  "minimum": 1,
                  "description": "Tile height",
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 1
                  },
                  "title": "Height",
                  "path": "spin.images.fullscreen.tile.height",
                  "level": 5,
                  "order": 1195
                },
                "number": {
                  "type": "number",
                  "minimum": 0,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "min": 0
                  },
                  "title": "Number",
                  "path": "spin.images.fullscreen.tile.number",
                  "level": 5,
                  "order": 1196
                }
              },
              "description": "Tile the image",
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.tile",
              "level": 4,
              "order": 1193
            },
            "rotate": {
              "type": "number",
              "description": "Rotate image (degrees)",
              "minimum": -180,
              "maximum": 180,
              "display": {
                "name": "input",
                "type": "number",
                "max": 180,
                "min": -180
              },
              "title": "Rotate",
              "path": "spin.images.fullscreen.rotate",
              "level": 4,
              "order": 1197
            },
            "subsampling": {
              "type": "string",
              "enum": [
                "4:4:4",
                "4:2:2",
                "4:2:0"
              ],
              "display": {
                "name": "radio-list",
                "options": [
                  {
                    "id": "4:4:4",
                    "title": "4:4:4"
                  },
                  {
                    "id": "4:2:2",
                    "title": "4:2:2"
                  },
                  {
                    "id": "4:2:0",
                    "title": "4:2:0"
                  }
                ]
              },
              "title": "Subsampling",
              "path": "spin.images.fullscreen.subsampling",
              "level": 4,
              "order": 1198
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": 0
              },
              "title": "Quality",
              "path": "spin.images.fullscreen.quality",
              "level": 4,
              "order": 1199
            },
            "png": {
              "properties": {
                "compression": {
                  "type": "number",
                  "description": "PNG compression",
                  "minimum": 0,
                  "maximum": 9,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 9,
                    "min": 0
                  },
                  "title": "Compression",
                  "path": "spin.images.fullscreen.png.compression",
                  "level": 5,
                  "order": 1201
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
                  "path": "spin.images.fullscreen.png.filtering",
                  "level": 5,
                  "order": 1202
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.png",
              "level": 4,
              "order": 1200
            },
            "webp": {
              "properties": {
                "fallback": {
                  "type": "string",
                  "enum": [
                    "png",
                    "jpg"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.fullscreen.webp.fallback",
                  "level": 5,
                  "order": 1204
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.webp",
              "level": 4,
              "order": 1203
            },
            "progressive": {
              "type": "boolean",
              "description": "Create progressive image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Progressive",
              "path": "spin.images.fullscreen.progressive",
              "level": 4,
              "order": 1205
            },
            "brightness": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Brightness",
              "path": "spin.images.fullscreen.brightness",
              "level": 4,
              "order": 1206
            },
            "contrast": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Contrast",
              "path": "spin.images.fullscreen.contrast",
              "level": 4,
              "order": 1207
            },
            "exposure": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input",
                "type": "number",
                "max": 100,
                "min": -100
              },
              "title": "Exposure",
              "path": "spin.images.fullscreen.exposure",
              "level": 4,
              "order": 1208
            },
            "grayscale": {
              "type": "boolean",
              "description": "Transform the image to black and white",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Grayscale",
              "path": "spin.images.fullscreen.grayscale",
              "level": 4,
              "order": 1209
            },
            "blur": {
              "type": "number",
              "description": "Apply a blur effect to the image",
              "display": {
                "name": "input",
                "type": "number"
              },
              "title": "Blur",
              "path": "spin.images.fullscreen.blur",
              "level": 4,
              "order": 1210
            },
            "tiltshift": {
              "type": "boolean",
              "description": "Apply a tilt-shift effect to the image",
              "display": {
                "name": "input",
                "type": "checkbox"
              },
              "title": "Tiltshift",
              "path": "spin.images.fullscreen.tiltshift",
              "level": 4,
              "order": 1211
            },
            "frame": {
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
                  "display": {
                    "name": "select",
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
                    ]
                  },
                  "title": "Style",
                  "path": "spin.images.fullscreen.frame.style",
                  "level": 5,
                  "order": 1213
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.fullscreen.frame.color",
                  "level": 5,
                  "order": 1214
                },
                "width": {
                  "type": "number",
                  "display": {
                    "name": "input",
                    "type": "number"
                  },
                  "title": "Width",
                  "path": "spin.images.fullscreen.frame.width",
                  "level": 5,
                  "order": 1215
                },
                "rim": {
                  "color": {
                    "type": "string"
                  },
                  "width": {
                    "type": "number"
                  },
                  "display": false,
                  "title": "Rim",
                  "path": "spin.images.fullscreen.frame.rim",
                  "level": 5,
                  "order": 1216
                }
              },
              "additionalProperties": false,
              "required": [
                "style"
              ],
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.frame",
              "level": 4,
              "order": 1212
            },
            "text": {
              "properties": {
                "style": {
                  "type": "string",
                  "enum": [
                    "simple",
                    "soft",
                    "none"
                  ],
                  "display": {
                    "name": "radio-list",
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
                  "path": "spin.images.fullscreen.text.style",
                  "level": 5,
                  "order": 1218
                },
                "font": {
                  "properties": {
                    "family": {
                      "type": "string",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Family",
                      "path": "spin.images.fullscreen.text.font.family",
                      "level": 6,
                      "order": 1220
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
                      "display": {
                        "name": "select",
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
                      "path": "spin.images.fullscreen.text.font.weight",
                      "level": 6,
                      "order": 1221
                    },
                    "style": {
                      "type": "string",
                      "enum": [
                        "normal",
                        "italic"
                      ],
                      "display": {
                        "name": "radio-list",
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
                      "path": "spin.images.fullscreen.text.font.style",
                      "level": 6,
                      "order": 1222
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
                      "display": false,
                      "title": "Size",
                      "path": "spin.images.fullscreen.text.font.size",
                      "level": 6,
                      "order": 1223
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.fullscreen.text.font",
                  "level": 5,
                  "order": 1219
                },
                "text": {
                  "type": "string",
                  "maxLength": 100,
                  "display": {
                    "name": "input",
                    "type": "text",
                    "maxlength": 100
                  },
                  "title": "Text",
                  "path": "spin.images.fullscreen.text.text",
                  "level": 5,
                  "order": 1224
                },
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.fullscreen.text.color",
                  "level": 5,
                  "order": 1225
                },
                "opacity": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 100,
                    "min": 0
                  },
                  "title": "Opacity",
                  "path": "spin.images.fullscreen.text.opacity",
                  "level": 5,
                  "order": 1226
                },
                "background": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.fullscreen.text.background.color",
                      "level": 6,
                      "order": 1228
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "max": 100,
                        "min": 0
                      },
                      "title": "Opacity",
                      "path": "spin.images.fullscreen.text.background.opacity",
                      "level": 6,
                      "order": 1229
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.fullscreen.text.background",
                  "level": 5,
                  "order": 1227
                },
                "outline": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input",
                        "type": "color"
                      },
                      "title": "Color",
                      "path": "spin.images.fullscreen.text.outline.color",
                      "level": 6,
                      "order": 1231
                    },
                    "width": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input",
                        "type": "number",
                        "min": 0
                      },
                      "title": "Width",
                      "path": "spin.images.fullscreen.text.outline.width",
                      "level": 6,
                      "order": 1232
                    }
                  },
                  "display": {
                    "name": "group"
                  },
                  "path": "spin.images.fullscreen.text.outline",
                  "level": 5,
                  "order": 1230
                },
                "size": {
                  "type": "string",
                  "format": "Percentage",
                  "display": {
                    "name": "input",
                    "type": "text"
                  },
                  "title": "Size",
                  "path": "spin.images.fullscreen.text.size",
                  "level": 5,
                  "order": 1233
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
                  "display": {
                    "name": "select",
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
                  "path": "spin.images.fullscreen.text.position",
                  "level": 5,
                  "order": 1234
                }
              },
              "required": [
                "text"
              ],
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.text",
              "level": 4,
              "order": 1217
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
              "display": {
                "name": "select",
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
              "path": "spin.images.fullscreen.colortone",
              "level": 4,
              "order": 1235
            },
            "vignette": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input",
                    "type": "color"
                  },
                  "title": "Color",
                  "path": "spin.images.fullscreen.vignette.color",
                  "level": 5,
                  "order": 1237
                },
                "value": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 1,
                  "display": {
                    "name": "input",
                    "type": "number",
                    "max": 1,
                    "min": 0
                  },
                  "title": "Value",
                  "path": "spin.images.fullscreen.vignette.value",
                  "level": 5,
                  "order": 1238
                }
              },
              "additionalProperties": false,
              "display": {
                "name": "group"
              },
              "path": "spin.images.fullscreen.vignette",
              "level": 4,
              "order": 1236
            }
          },
          "display": {
            "name": "group"
          },
          "path": "spin.images.fullscreen",
          "level": 3,
          "order": 1180
        }
      },
      "display": {
        "name": "group",
        "type": "tab"
      },
      "path": "spin",
      "level": 1,
      "order": 1060
    }
  },
  "title": "Profile",
  "display": "group:tab",
  "level": 0,
  "order": 1000
}
