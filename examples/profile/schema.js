window.schema = {
  "title": "Profile",
  "display": {
    "name": "tree"
  },
  "properties": {
    "image": {
      "title": "Image Settings",
      "display": {
        "name": "group"
      },
      "showInTree": true,
      "properties": {
        "general": {
          "title": "General settings",
          "display": "group",
          "showInTree": true,
          "order": 1,
          "properties": {
            "profile": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Profile",
              "order": 1002,
              "path": "image.profile",
              "level": 2,
              "uiPath": "root.image.general.profile"
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
              "title": "Format",
              "order": 1003,
              "path": "image.format",
              "level": 2,
              "uiPath": "root.image.general.format"
            },
            "thumbnail": {
              "type": "number",
              "minimum": 1,
              "maximum": 256,
              "description": "Create square thumbnail of specified size",
              "display": {
                "name": "input/number",
                "max": 256,
                "min": 1,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Thumbnail",
              "order": 1013,
              "path": "image.thumbnail",
              "level": 2,
              "uiPath": "root.image.general.thumbnail"
            },
            "rotate": {
              "type": "number",
              "description": "Rotate image (degrees)",
              "minimum": -180,
              "maximum": 180,
              "display": {
                "name": "input/number",
                "max": 180,
                "min": -180,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Rotate",
              "order": 1017,
              "path": "image.rotate",
              "level": 2,
              "uiPath": "root.image.general.rotate"
            },
            "subsampling": {
              "type": "string",
              "enum": [
                "4:4:4",
                "4:2:2",
                "4:2:0"
              ],
              "display": {
                "name": "radiolist",
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
              "title": "Subsampling",
              "order": 1018,
              "path": "image.subsampling",
              "level": 2,
              "uiPath": "root.image.general.subsampling"
            },
            "quality": {
              "type": "number",
              "description": "Image quality",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Quality",
              "order": 1019,
              "path": "image.quality",
              "level": 2,
              "uiPath": "root.image.general.quality"
            },
            "progressive": {
              "type": "boolean",
              "description": "Create progressive image",
              "display": {
                "name": "checkbox"
              },
              "title": "Progressive",
              "order": 1025,
              "path": "image.progressive",
              "level": 2,
              "uiPath": "root.image.general.progressive"
            },
            "brightness": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": -100,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Brightness",
              "order": 1026,
              "path": "image.brightness",
              "level": 2,
              "uiPath": "root.image.general.brightness"
            },
            "contrast": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": -100,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Contrast",
              "order": 1027,
              "path": "image.contrast",
              "level": 2,
              "uiPath": "root.image.general.contrast"
            },
            "exposure": {
              "type": "number",
              "minimum": -100,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": -100,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Exposure",
              "order": 1028,
              "path": "image.exposure",
              "level": 2,
              "uiPath": "root.image.general.exposure"
            },
            "grayscale": {
              "type": "boolean",
              "description": "Transform the image to black and white",
              "display": {
                "name": "checkbox"
              },
              "title": "Grayscale",
              "order": 1029,
              "path": "image.grayscale",
              "level": 2,
              "uiPath": "root.image.general.grayscale"
            },
            "blur": {
              "type": "number",
              "description": "Apply a blur effect to the image",
              "display": {
                "name": "input/number",
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Blur",
              "order": 1030,
              "path": "image.blur",
              "level": 2,
              "uiPath": "root.image.general.blur"
            },
            "tiltshift": {
              "type": "boolean",
              "description": "Apply a tilt-shift effect to the image",
              "display": {
                "name": "checkbox"
              },
              "title": "Tiltshift",
              "order": 1031,
              "path": "image.tiltshift",
              "level": 2,
              "uiPath": "root.image.general.tiltshift"
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
              "order": 1053,
              "path": "image.colortone",
              "level": 2,
              "uiPath": "root.image.general.colortone"
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
              "level": 2,
              "uiPath": "root.image.general.testText"
            },
            "testRange": {
              "display": {
                "name": "input/range",
                "min": 0,
                "max": 1,
                "step": 0.01,
                "fallback": {
                  "name": "input",
                  "type": "range"
                }
              },
              "order": 2,
              "title": "Test range",
              "path": "image.testRange",
              "level": 2,
              "uiPath": "root.image.general.testRange"
            },
            "testCheckbox": {
              "type": "boolean",
              "order": 2,
              "description": "Check for true",
              "display": {
                "name": "checkbox"
              },
              "title": "Test checkbox",
              "path": "image.testCheckbox",
              "level": 2,
              "uiPath": "root.image.general.testCheckbox"
            }
          },
          "uiPath": "root.image.general"
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
              "order": 1005,
              "path": "image.scale.width",
              "level": 3,
              "uiPath": "root.image.scale.width"
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
              "order": 1006,
              "path": "image.scale.height",
              "level": 3,
              "uiPath": "root.image.scale.height"
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
              "title": "Option",
              "order": 1007,
              "path": "image.scale.option",
              "level": 3,
              "uiPath": "root.image.scale.option"
            }
          },
          "description": "Scale the image to specified width and height",
          "additionalProperties": false,
          "title": "Scaling options",
          "display": {
            "name": "fieldset",
            "fallback": {
              "name": "group"
            }
          },
          "group": "scale",
          "order": 1004,
          "path": "image.scale",
          "level": 2,
          "uiPath": "root.image.scale"
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
              "order": 1009,
              "path": "image.crop.width",
              "level": 3,
              "uiPath": "root.image.crop.width"
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
              "order": 1010,
              "path": "image.crop.height",
              "level": 3,
              "uiPath": "root.image.crop.height"
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
                "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                "hint": "(+/-) 0-100% or 0-9999px or center"
              },
              "title": "X",
              "order": 1011,
              "path": "image.crop.x",
              "level": 3,
              "uiPath": "root.image.crop.x"
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
                "name": "input",
                "type": "text",
                "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
                "hint": "(+/-) 0-100% or 0-9999px or center"
              },
              "title": "Y",
              "order": 1012,
              "path": "image.crop.y",
              "level": 3,
              "uiPath": "root.image.crop.y"
            }
          },
          "description": "Crop the image",
          "additionalProperties": false,
          "title": "Crop options",
          "display": {
            "name": "fieldset",
            "fallback": {
              "name": "group"
            }
          },
          "order": 1008,
          "path": "image.crop",
          "level": 2,
          "uiPath": "root.image.crop"
        },
        "tile": {
          "hidden": true,
          "properties": {
            "width": {
              "type": "number",
              "minimum": 1,
              "description": "Tile width",
              "display": {
                "name": "input/number",
                "min": 1,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Width",
              "order": 1014,
              "path": "width",
              "level": null,
              "uiPath": "root.image.tile.width"
            },
            "height": {
              "type": "number",
              "minimum": 1,
              "description": "Tile height",
              "display": {
                "name": "input/number",
                "min": 1,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Height",
              "order": 1015,
              "path": "height",
              "level": null,
              "uiPath": "root.image.tile.height"
            },
            "number": {
              "type": "number",
              "minimum": 0,
              "display": {
                "name": "input/number",
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Number",
              "order": 1016,
              "path": "number",
              "level": null,
              "uiPath": "root.image.tile.number"
            }
          },
          "description": "Tile the image",
          "additionalProperties": false,
          "display": false,
          "uiPath": "root.image.tile"
        },
        "png": {
          "properties": {
            "compression": {
              "type": "number",
              "description": "PNG compression",
              "minimum": 0,
              "maximum": 9,
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
              "order": 1021,
              "path": "image.png.compression",
              "level": 3,
              "uiPath": "root.image.png.compression"
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
              "order": 1022,
              "path": "image.png.filtering",
              "level": 3,
              "uiPath": "root.image.png.filtering"
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "order": 1020,
          "path": "image.png",
          "level": 2,
          "uiPath": "root.image.png"
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
                "name": "radiolist",
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
              "order": 1024,
              "path": "image.webp.fallback",
              "level": 3,
              "uiPath": "root.image.webp.fallback"
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "order": 1023,
          "path": "image.webp",
          "level": 2,
          "uiPath": "root.image.webp"
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
                ],
                "required": true
              },
              "title": "Style",
              "order": 1033,
              "path": "image.frame.style",
              "level": 3,
              "uiPath": "root.image.frame.style"
            },
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1034,
              "path": "image.frame.color",
              "level": 3,
              "uiPath": "root.image.frame.color"
            },
            "width": {
              "type": "number",
              "display": {
                "name": "input/number",
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Width",
              "order": 1035,
              "path": "image.frame.width",
              "level": 3,
              "uiPath": "root.image.frame.width"
            },
            "rim": {
              "color": {
                "type": "string"
              },
              "width": {
                "type": "number"
              },
              "uiPath": "root.image.frame.rim"
            }
          },
          "additionalProperties": false,
          "required": [
            "style"
          ],
          "display": {
            "name": "group"
          },
          "order": 1032,
          "path": "image.frame",
          "level": 2,
          "uiPath": "root.image.frame"
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
                "name": "radiolist",
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
              "order": 1037,
              "path": "image.text.style",
              "level": 3,
              "uiPath": "root.image.text.style"
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
                  "order": 1039,
                  "path": "image.text.font.family",
                  "level": 4,
                  "uiPath": "root.image.text.font.family"
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
                  "order": 1040,
                  "path": "image.text.font.weight",
                  "level": 4,
                  "uiPath": "root.image.text.font.weight"
                },
                "style": {
                  "type": "string",
                  "enum": [
                    "normal",
                    "italic"
                  ],
                  "display": {
                    "name": "radiolist",
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
                  "order": 1041,
                  "path": "image.text.font.style",
                  "level": 4,
                  "uiPath": "root.image.text.font.style"
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
                  "uiPath": "root.image.text.font.size"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1038,
              "path": "image.text.font",
              "level": 3,
              "uiPath": "root.image.text.font"
            },
            "text": {
              "type": "string",
              "maxLength": 100,
              "display": {
                "name": "input",
                "type": "text",
                "maxlength": 100,
                "required": true
              },
              "title": "Text",
              "order": 1042,
              "path": "image.text.text",
              "level": 3,
              "uiPath": "root.image.text.text"
            },
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1043,
              "path": "image.text.color",
              "level": 3,
              "uiPath": "root.image.text.color"
            },
            "opacity": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Opacity",
              "order": 1044,
              "path": "image.text.opacity",
              "level": 3,
              "uiPath": "root.image.text.opacity"
            },
            "background": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input/color",
                    "fallback": {
                      "name": "input",
                      "type": "color"
                    }
                  },
                  "title": "Color",
                  "order": 1046,
                  "path": "image.text.background.color",
                  "level": 4,
                  "uiPath": "root.image.text.background.color"
                },
                "opacity": {
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
                  "title": "Opacity",
                  "order": 1047,
                  "path": "image.text.background.opacity",
                  "level": 4,
                  "uiPath": "root.image.text.background.opacity"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1045,
              "path": "image.text.background",
              "level": 3,
              "uiPath": "root.image.text.background"
            },
            "outline": {
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "display": {
                    "name": "input/color",
                    "fallback": {
                      "name": "input",
                      "type": "color"
                    }
                  },
                  "title": "Color",
                  "order": 1049,
                  "path": "image.text.outline.color",
                  "level": 4,
                  "uiPath": "root.image.text.outline.color"
                },
                "width": {
                  "type": "number",
                  "minimum": 0,
                  "display": {
                    "name": "input/number",
                    "min": 0,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Width",
                  "order": 1050,
                  "path": "image.text.outline.width",
                  "level": 4,
                  "uiPath": "root.image.text.outline.width"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1048,
              "path": "image.text.outline",
              "level": 3,
              "uiPath": "root.image.text.outline"
            },
            "size": {
              "type": "string",
              "format": "Percentage",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Size",
              "order": 1051,
              "path": "image.text.size",
              "level": 3,
              "uiPath": "root.image.text.size"
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
              "order": 1052,
              "path": "image.text.position",
              "level": 3,
              "uiPath": "root.image.text.position"
            }
          },
          "required": [
            "text"
          ],
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "order": 1036,
          "path": "image.text",
          "level": 2,
          "uiPath": "root.image.text"
        },
        "vignette": {
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1055,
              "path": "image.vignette.color",
              "level": 3,
              "uiPath": "root.image.vignette.color"
            },
            "value": {
              "type": "number",
              "minimum": 0,
              "maximum": 1,
              "display": {
                "name": "input/range",
                "max": 1,
                "min": 0,
                "step": 0.01,
                "fallback": {
                  "name": "input",
                  "type": "range"
                }
              },
              "title": "Value",
              "order": 1056,
              "path": "image.vignette.value",
              "level": 3,
              "uiPath": "root.image.vignette.value"
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group"
          },
          "order": 1054,
          "path": "image.vignette",
          "level": 2,
          "uiPath": "root.image.vignette"
        }
      },
      "uiPath": "root.image"
    },
    "spin": {
      "title": "Spin Settings",
      "display": {
        "name": "group"
      },
      "showInTree": true,
      "properties": {
        "general": {
          "title": "General settings",
          "display": "group",
          "showInTree": true,
          "order": 1,
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
              "order": 1209,
              "path": "spin.autospin",
              "level": 2,
              "uiPath": "root.spin.general.autospin"
            },
            "autospinSpeed": {
              "type": "number",
              "display": {
                "name": "input/number",
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Autospin speed",
              "order": 1210,
              "path": "spin.autospinSpeed",
              "level": 2,
              "uiPath": "root.spin.general.autospinSpeed"
            },
            "autospinStart": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Autospin start",
              "order": 1211,
              "path": "spin.autospinStart",
              "level": 2,
              "uiPath": "root.spin.general.autospinStart"
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
              "order": 1212,
              "path": "spin.autospinDirection",
              "level": 2,
              "uiPath": "root.spin.general.autospinDirection"
            },
            "fullscreen": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Fullscreen",
              "order": 1213,
              "path": "spin.fullscreen",
              "level": 2,
              "uiPath": "root.spin.general.fullscreen"
            },
            "zoom": {
              "type": "number",
              "minimum": 0,
              "display": {
                "name": "input/number",
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Zoom",
              "order": 1214,
              "path": "spin.zoom",
              "level": 2,
              "uiPath": "root.spin.general.zoom"
            },
            "initializeOn": {
              "type": "string",
              "enum": [
                "load",
                "hover",
                "click"
              ],
              "display": {
                "name": "radiolist",
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
              "order": 1215,
              "path": "spin.initializeOn",
              "level": 2,
              "uiPath": "root.spin.general.initializeOn"
            },
            "speed": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "display": {
                "name": "input/number",
                "max": 100,
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Speed",
              "order": 1216,
              "path": "spin.speed",
              "level": 2,
              "uiPath": "root.spin.general.speed"
            },
            "hint": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Hint",
              "order": 1217,
              "path": "spin.hint",
              "level": 2,
              "uiPath": "root.spin.general.hint"
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
              "uiPath": "root.spin.general.startColumn"
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
              "uiPath": "root.spin.general.startRow"
            },
            "spin": {
              "type": "string",
              "enum": [
                "drag",
                "hover"
              ],
              "display": {
                "name": "radiolist",
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
              "order": 1218,
              "path": "spin.spin",
              "level": 2,
              "uiPath": "root.spin.general.spin"
            },
            "rightClick": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Right click",
              "order": 1219,
              "path": "spin.rightClick",
              "level": 2,
              "uiPath": "root.spin.general.rightClick"
            },
            "mousewheelStep": {
              "type": "number",
              "display": {
                "name": "input/number",
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Mousewheel step",
              "order": 1220,
              "path": "spin.mousewheelStep",
              "level": 2,
              "uiPath": "root.spin.general.mousewheelStep"
            },
            "loopColumn": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Loop column",
              "order": 1221,
              "path": "spin.loopColumn",
              "level": 2,
              "uiPath": "root.spin.general.loopColumn"
            },
            "loopRow": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Loop row",
              "order": 1222,
              "path": "spin.loopRow",
              "level": 2,
              "uiPath": "root.spin.general.loopRow"
            },
            "autospinStop": {
              "type": "string",
              "enum": [
                "click",
                "hover",
                "never"
              ],
              "display": {
                "name": "radiolist",
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
              "order": 1223,
              "path": "spin.autospinStop",
              "level": 2,
              "uiPath": "root.spin.general.autospinStop"
            },
            "swapRowsColumns": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Swap rows columns",
              "order": 1224,
              "path": "spin.swapRowsColumns",
              "level": 2,
              "uiPath": "root.spin.general.swapRowsColumns"
            },
            "retina": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Retina",
              "order": 1225,
              "path": "spin.retina",
              "level": 2,
              "uiPath": "root.spin.general.retina"
            },
            "loadingText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Loading text",
              "order": 1226,
              "path": "spin.loadingText",
              "level": 2,
              "uiPath": "root.spin.general.loadingText"
            },
            "fullscreenLoadingText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Fullscreen loading text",
              "order": 1227,
              "path": "spin.fullscreenLoadingText",
              "level": 2,
              "uiPath": "root.spin.general.fullscreenLoadingText"
            },
            "hintText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Hint text",
              "order": 1228,
              "path": "spin.hintText",
              "level": 2,
              "uiPath": "root.spin.general.hintText"
            },
            "mobileHintText": {
              "type": "string",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Mobile hint text",
              "order": 1229,
              "path": "spin.mobileHintText",
              "level": 2,
              "uiPath": "root.spin.general.mobileHintText"
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
              "order": 1230,
              "path": "spin.reverseRotation",
              "level": 2,
              "uiPath": "root.spin.general.reverseRotation"
            },
            "emulate3D": {
              "type": "boolean",
              "display": {
                "name": "checkbox"
              },
              "title": "Emulate3D",
              "order": 1231,
              "path": "spin.emulate3D",
              "level": 2,
              "uiPath": "root.spin.general.emulate3D"
            }
          },
          "uiPath": "root.spin.general"
        },
        "images": {
          "group": "root.images",
          "properties": {
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
                  "order": 1060,
                  "path": "spin.images.main.profile",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.profile"
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
                  "order": 1061,
                  "path": "spin.images.main.format",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.format"
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
                      "uiPath": "root.spin.images.main.scale.width"
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
                      "uiPath": "root.spin.images.main.scale.height"
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
                      "order": 1063,
                      "path": "spin.images.main.scale.option",
                      "level": 5,
                      "uiPath": "root.spin.images.main.scale.option"
                    }
                  },
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1062,
                  "path": "spin.images.main.scale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.scale"
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
                      "uiPath": "root.spin.images.main.crop.width"
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
                      "uiPath": "root.spin.images.main.crop.height"
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
                      "uiPath": "root.spin.images.main.crop.x"
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
                      "uiPath": "root.spin.images.main.crop.y"
                    }
                  },
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1064,
                  "path": "spin.images.main.crop",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.crop"
                },
                "thumbnail": {
                  "type": "number",
                  "minimum": 1,
                  "maximum": 256,
                  "description": "Create square thumbnail of specified size",
                  "display": {
                    "name": "input/number",
                    "max": 256,
                    "min": 1,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Thumbnail",
                  "order": 1065,
                  "path": "spin.images.main.thumbnail",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.thumbnail"
                },
                "tile": {
                  "hidden": true,
                  "properties": {
                    "width": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile width",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1066,
                      "path": "width",
                      "level": null,
                      "uiPath": "root.spin.images.main.tile.width"
                    },
                    "height": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile height",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Height",
                      "order": 1067,
                      "path": "height",
                      "level": null,
                      "uiPath": "root.spin.images.main.tile.height"
                    },
                    "number": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Number",
                      "order": 1068,
                      "path": "number",
                      "level": null,
                      "uiPath": "root.spin.images.main.tile.number"
                    }
                  },
                  "description": "Tile the image",
                  "additionalProperties": false,
                  "display": false,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.tile"
                },
                "rotate": {
                  "type": "number",
                  "description": "Rotate image (degrees)",
                  "minimum": -180,
                  "maximum": 180,
                  "display": {
                    "name": "input/number",
                    "max": 180,
                    "min": -180,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Rotate",
                  "order": 1069,
                  "path": "spin.images.main.rotate",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.rotate"
                },
                "subsampling": {
                  "type": "string",
                  "enum": [
                    "4:4:4",
                    "4:2:2",
                    "4:2:0"
                  ],
                  "display": {
                    "name": "radiolist",
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
                  "order": 1070,
                  "path": "spin.images.main.subsampling",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.subsampling"
                },
                "quality": {
                  "type": "number",
                  "description": "Image quality",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": 0,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Quality",
                  "order": 1071,
                  "path": "spin.images.main.quality",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.quality"
                },
                "png": {
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
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
                      "order": 1073,
                      "path": "spin.images.main.png.compression",
                      "level": 5,
                      "uiPath": "root.spin.images.main.png.compression"
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
                      "order": 1074,
                      "path": "spin.images.main.png.filtering",
                      "level": 5,
                      "uiPath": "root.spin.images.main.png.filtering"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1072,
                  "path": "spin.images.main.png",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.png"
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
                        "name": "radiolist",
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
                      "order": 1076,
                      "path": "spin.images.main.webp.fallback",
                      "level": 5,
                      "uiPath": "root.spin.images.main.webp.fallback"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1075,
                  "path": "spin.images.main.webp",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.webp"
                },
                "progressive": {
                  "type": "boolean",
                  "description": "Create progressive image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Progressive",
                  "order": 1077,
                  "path": "spin.images.main.progressive",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.progressive"
                },
                "brightness": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Brightness",
                  "order": 1078,
                  "path": "spin.images.main.brightness",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.brightness"
                },
                "contrast": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Contrast",
                  "order": 1079,
                  "path": "spin.images.main.contrast",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.contrast"
                },
                "exposure": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Exposure",
                  "order": 1080,
                  "path": "spin.images.main.exposure",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.exposure"
                },
                "grayscale": {
                  "type": "boolean",
                  "description": "Transform the image to black and white",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Grayscale",
                  "order": 1081,
                  "path": "spin.images.main.grayscale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.grayscale"
                },
                "blur": {
                  "type": "number",
                  "description": "Apply a blur effect to the image",
                  "display": {
                    "name": "input/number",
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Blur",
                  "order": 1082,
                  "path": "spin.images.main.blur",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.blur"
                },
                "tiltshift": {
                  "type": "boolean",
                  "description": "Apply a tilt-shift effect to the image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Tiltshift",
                  "order": 1083,
                  "path": "spin.images.main.tiltshift",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.tiltshift"
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
                        ],
                        "required": true
                      },
                      "title": "Style",
                      "order": 1085,
                      "path": "spin.images.main.frame.style",
                      "level": 5,
                      "uiPath": "root.spin.images.main.frame.style"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1086,
                      "path": "spin.images.main.frame.color",
                      "level": 5,
                      "uiPath": "root.spin.images.main.frame.color"
                    },
                    "width": {
                      "type": "number",
                      "display": {
                        "name": "input/number",
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1087,
                      "path": "spin.images.main.frame.width",
                      "level": 5,
                      "uiPath": "root.spin.images.main.frame.width"
                    },
                    "rim": {
                      "color": {
                        "type": "string"
                      },
                      "width": {
                        "type": "number"
                      },
                      "uiPath": "root.spin.images.main.frame.rim"
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "style"
                  ],
                  "display": {
                    "name": "group"
                  },
                  "order": 1084,
                  "path": "spin.images.main.frame",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.frame"
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
                        "name": "radiolist",
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
                      "order": 1089,
                      "path": "spin.images.main.text.style",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.style"
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
                          "order": 1091,
                          "path": "spin.images.main.text.font.family",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.font.family"
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
                          "order": 1092,
                          "path": "spin.images.main.text.font.weight",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.font.weight"
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "display": {
                            "name": "radiolist",
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
                          "order": 1093,
                          "path": "spin.images.main.text.font.style",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.font.style"
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
                          "uiPath": "root.spin.images.main.text.font.size"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1090,
                      "path": "spin.images.main.text.font",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.font"
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "display": {
                        "name": "input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "order": 1094,
                      "path": "spin.images.main.text.text",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.text"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1095,
                      "path": "spin.images.main.text.color",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.color"
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input/number",
                        "max": 100,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Opacity",
                      "order": 1096,
                      "path": "spin.images.main.text.opacity",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.opacity"
                    },
                    "background": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1098,
                          "path": "spin.images.main.text.background.color",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.background.color"
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "input/number",
                            "max": 100,
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Opacity",
                          "order": 1099,
                          "path": "spin.images.main.text.background.opacity",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.background.opacity"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1097,
                      "path": "spin.images.main.text.background",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.background"
                    },
                    "outline": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1101,
                          "path": "spin.images.main.text.outline.color",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.outline.color"
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "display": {
                            "name": "input/number",
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Width",
                          "order": 1102,
                          "path": "spin.images.main.text.outline.width",
                          "level": 6,
                          "uiPath": "root.spin.images.main.text.outline.width"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1100,
                      "path": "spin.images.main.text.outline",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.outline"
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Size",
                      "order": 1103,
                      "path": "spin.images.main.text.size",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.size"
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
                      "order": 1104,
                      "path": "spin.images.main.text.position",
                      "level": 5,
                      "uiPath": "root.spin.images.main.text.position"
                    }
                  },
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1088,
                  "path": "spin.images.main.text",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.text"
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
                  "order": 1105,
                  "path": "spin.images.main.colortone",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.colortone"
                },
                "vignette": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1107,
                      "path": "spin.images.main.vignette.color",
                      "level": 5,
                      "uiPath": "root.spin.images.main.vignette.color"
                    },
                    "value": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 1,
                      "display": {
                        "name": "input/number",
                        "max": 1,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Value",
                      "order": 1108,
                      "path": "spin.images.main.vignette.value",
                      "level": 5,
                      "uiPath": "root.spin.images.main.vignette.value"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1106,
                  "path": "spin.images.main.vignette",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.main.vignette"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1059,
              "path": "spin.images.main",
              "level": 3,
              "showInTree": true,
              "uiPath": "root.spin.images.main"
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
                  "order": 1110,
                  "path": "spin.images.zoom.profile",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.profile"
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
                  "order": 1111,
                  "path": "spin.images.zoom.format",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.format"
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
                      "uiPath": "root.spin.images.zoom.scale.width"
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
                      "uiPath": "root.spin.images.zoom.scale.height"
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
                      "order": 1113,
                      "path": "spin.images.zoom.scale.option",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.scale.option"
                    }
                  },
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1112,
                  "path": "spin.images.zoom.scale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.scale"
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
                      "uiPath": "root.spin.images.zoom.crop.width"
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
                      "uiPath": "root.spin.images.zoom.crop.height"
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
                      "uiPath": "root.spin.images.zoom.crop.x"
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
                      "uiPath": "root.spin.images.zoom.crop.y"
                    }
                  },
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1114,
                  "path": "spin.images.zoom.crop",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.crop"
                },
                "thumbnail": {
                  "type": "number",
                  "minimum": 1,
                  "maximum": 256,
                  "description": "Create square thumbnail of specified size",
                  "display": {
                    "name": "input/number",
                    "max": 256,
                    "min": 1,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Thumbnail",
                  "order": 1115,
                  "path": "spin.images.zoom.thumbnail",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.thumbnail"
                },
                "tile": {
                  "hidden": true,
                  "properties": {
                    "width": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile width",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1116,
                      "path": "width",
                      "level": null,
                      "uiPath": "root.spin.images.zoom.tile.width"
                    },
                    "height": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile height",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Height",
                      "order": 1117,
                      "path": "height",
                      "level": null,
                      "uiPath": "root.spin.images.zoom.tile.height"
                    },
                    "number": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Number",
                      "order": 1118,
                      "path": "number",
                      "level": null,
                      "uiPath": "root.spin.images.zoom.tile.number"
                    }
                  },
                  "description": "Tile the image",
                  "additionalProperties": false,
                  "display": false,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.tile"
                },
                "rotate": {
                  "type": "number",
                  "description": "Rotate image (degrees)",
                  "minimum": -180,
                  "maximum": 180,
                  "display": {
                    "name": "input/number",
                    "max": 180,
                    "min": -180,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Rotate",
                  "order": 1119,
                  "path": "spin.images.zoom.rotate",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.rotate"
                },
                "subsampling": {
                  "type": "string",
                  "enum": [
                    "4:4:4",
                    "4:2:2",
                    "4:2:0"
                  ],
                  "display": {
                    "name": "radiolist",
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
                  "order": 1120,
                  "path": "spin.images.zoom.subsampling",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.subsampling"
                },
                "quality": {
                  "type": "number",
                  "description": "Image quality",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": 0,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Quality",
                  "order": 1121,
                  "path": "spin.images.zoom.quality",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.quality"
                },
                "png": {
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
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
                      "order": 1123,
                      "path": "spin.images.zoom.png.compression",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.png.compression"
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
                      "order": 1124,
                      "path": "spin.images.zoom.png.filtering",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.png.filtering"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1122,
                  "path": "spin.images.zoom.png",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.png"
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
                        "name": "radiolist",
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
                      "order": 1126,
                      "path": "spin.images.zoom.webp.fallback",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.webp.fallback"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1125,
                  "path": "spin.images.zoom.webp",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.webp"
                },
                "progressive": {
                  "type": "boolean",
                  "description": "Create progressive image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Progressive",
                  "order": 1127,
                  "path": "spin.images.zoom.progressive",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.progressive"
                },
                "brightness": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Brightness",
                  "order": 1128,
                  "path": "spin.images.zoom.brightness",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.brightness"
                },
                "contrast": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Contrast",
                  "order": 1129,
                  "path": "spin.images.zoom.contrast",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.contrast"
                },
                "exposure": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Exposure",
                  "order": 1130,
                  "path": "spin.images.zoom.exposure",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.exposure"
                },
                "grayscale": {
                  "type": "boolean",
                  "description": "Transform the image to black and white",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Grayscale",
                  "order": 1131,
                  "path": "spin.images.zoom.grayscale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.grayscale"
                },
                "blur": {
                  "type": "number",
                  "description": "Apply a blur effect to the image",
                  "display": {
                    "name": "input/number",
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Blur",
                  "order": 1132,
                  "path": "spin.images.zoom.blur",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.blur"
                },
                "tiltshift": {
                  "type": "boolean",
                  "description": "Apply a tilt-shift effect to the image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Tiltshift",
                  "order": 1133,
                  "path": "spin.images.zoom.tiltshift",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.tiltshift"
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
                        ],
                        "required": true
                      },
                      "title": "Style",
                      "order": 1135,
                      "path": "spin.images.zoom.frame.style",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.frame.style"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1136,
                      "path": "spin.images.zoom.frame.color",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.frame.color"
                    },
                    "width": {
                      "type": "number",
                      "display": {
                        "name": "input/number",
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1137,
                      "path": "spin.images.zoom.frame.width",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.frame.width"
                    },
                    "rim": {
                      "color": {
                        "type": "string"
                      },
                      "width": {
                        "type": "number"
                      },
                      "uiPath": "root.spin.images.zoom.frame.rim"
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "style"
                  ],
                  "display": {
                    "name": "group"
                  },
                  "order": 1134,
                  "path": "spin.images.zoom.frame",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.frame"
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
                        "name": "radiolist",
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
                      "order": 1139,
                      "path": "spin.images.zoom.text.style",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.style"
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
                          "order": 1141,
                          "path": "spin.images.zoom.text.font.family",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.font.family"
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
                          "order": 1142,
                          "path": "spin.images.zoom.text.font.weight",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.font.weight"
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "display": {
                            "name": "radiolist",
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
                          "order": 1143,
                          "path": "spin.images.zoom.text.font.style",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.font.style"
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
                          "uiPath": "root.spin.images.zoom.text.font.size"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1140,
                      "path": "spin.images.zoom.text.font",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.font"
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "display": {
                        "name": "input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "order": 1144,
                      "path": "spin.images.zoom.text.text",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.text"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1145,
                      "path": "spin.images.zoom.text.color",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.color"
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input/number",
                        "max": 100,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Opacity",
                      "order": 1146,
                      "path": "spin.images.zoom.text.opacity",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.opacity"
                    },
                    "background": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1148,
                          "path": "spin.images.zoom.text.background.color",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.background.color"
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "input/number",
                            "max": 100,
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Opacity",
                          "order": 1149,
                          "path": "spin.images.zoom.text.background.opacity",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.background.opacity"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1147,
                      "path": "spin.images.zoom.text.background",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.background"
                    },
                    "outline": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1151,
                          "path": "spin.images.zoom.text.outline.color",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.outline.color"
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "display": {
                            "name": "input/number",
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Width",
                          "order": 1152,
                          "path": "spin.images.zoom.text.outline.width",
                          "level": 6,
                          "uiPath": "root.spin.images.zoom.text.outline.width"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1150,
                      "path": "spin.images.zoom.text.outline",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.outline"
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Size",
                      "order": 1153,
                      "path": "spin.images.zoom.text.size",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.size"
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
                      "order": 1154,
                      "path": "spin.images.zoom.text.position",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.text.position"
                    }
                  },
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1138,
                  "path": "spin.images.zoom.text",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.text"
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
                  "order": 1155,
                  "path": "spin.images.zoom.colortone",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.colortone"
                },
                "vignette": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1157,
                      "path": "spin.images.zoom.vignette.color",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.vignette.color"
                    },
                    "value": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 1,
                      "display": {
                        "name": "input/number",
                        "max": 1,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Value",
                      "order": 1158,
                      "path": "spin.images.zoom.vignette.value",
                      "level": 5,
                      "uiPath": "root.spin.images.zoom.vignette.value"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1156,
                  "path": "spin.images.zoom.vignette",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.zoom.vignette"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1109,
              "path": "spin.images.zoom",
              "level": 3,
              "showInTree": true,
              "uiPath": "root.spin.images.zoom"
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
                  "order": 1160,
                  "path": "spin.images.fullscreen.profile",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.profile"
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
                  "order": 1161,
                  "path": "spin.images.fullscreen.format",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.format"
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
                      "uiPath": "root.spin.images.fullscreen.scale.width"
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
                      "uiPath": "root.spin.images.fullscreen.scale.height"
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
                      "order": 1163,
                      "path": "spin.images.fullscreen.scale.option",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.scale.option"
                    }
                  },
                  "description": "Scale the image to specified width and height",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1162,
                  "path": "spin.images.fullscreen.scale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.scale"
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
                      "uiPath": "root.spin.images.fullscreen.crop.width"
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
                      "uiPath": "root.spin.images.fullscreen.crop.height"
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
                      "uiPath": "root.spin.images.fullscreen.crop.x"
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
                      "uiPath": "root.spin.images.fullscreen.crop.y"
                    }
                  },
                  "description": "Crop the image",
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1164,
                  "path": "spin.images.fullscreen.crop",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.crop"
                },
                "thumbnail": {
                  "type": "number",
                  "minimum": 1,
                  "maximum": 256,
                  "description": "Create square thumbnail of specified size",
                  "display": {
                    "name": "input/number",
                    "max": 256,
                    "min": 1,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Thumbnail",
                  "order": 1165,
                  "path": "spin.images.fullscreen.thumbnail",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.thumbnail"
                },
                "tile": {
                  "hidden": true,
                  "properties": {
                    "width": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile width",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1166,
                      "path": "width",
                      "level": null,
                      "uiPath": "root.spin.images.fullscreen.tile.width"
                    },
                    "height": {
                      "type": "number",
                      "minimum": 1,
                      "description": "Tile height",
                      "display": {
                        "name": "input/number",
                        "min": 1,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Height",
                      "order": 1167,
                      "path": "height",
                      "level": null,
                      "uiPath": "root.spin.images.fullscreen.tile.height"
                    },
                    "number": {
                      "type": "number",
                      "minimum": 0,
                      "display": {
                        "name": "input/number",
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Number",
                      "order": 1168,
                      "path": "number",
                      "level": null,
                      "uiPath": "root.spin.images.fullscreen.tile.number"
                    }
                  },
                  "description": "Tile the image",
                  "additionalProperties": false,
                  "display": false,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.tile"
                },
                "rotate": {
                  "type": "number",
                  "description": "Rotate image (degrees)",
                  "minimum": -180,
                  "maximum": 180,
                  "display": {
                    "name": "input/number",
                    "max": 180,
                    "min": -180,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Rotate",
                  "order": 1169,
                  "path": "spin.images.fullscreen.rotate",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.rotate"
                },
                "subsampling": {
                  "type": "string",
                  "enum": [
                    "4:4:4",
                    "4:2:2",
                    "4:2:0"
                  ],
                  "display": {
                    "name": "radiolist",
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
                  "order": 1170,
                  "path": "spin.images.fullscreen.subsampling",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.subsampling"
                },
                "quality": {
                  "type": "number",
                  "description": "Image quality",
                  "minimum": 0,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": 0,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Quality",
                  "order": 1171,
                  "path": "spin.images.fullscreen.quality",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.quality"
                },
                "png": {
                  "properties": {
                    "compression": {
                      "type": "number",
                      "description": "PNG compression",
                      "minimum": 0,
                      "maximum": 9,
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
                      "order": 1173,
                      "path": "spin.images.fullscreen.png.compression",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.png.compression"
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
                      "order": 1174,
                      "path": "spin.images.fullscreen.png.filtering",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.png.filtering"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1172,
                  "path": "spin.images.fullscreen.png",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.png"
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
                        "name": "radiolist",
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
                      "order": 1176,
                      "path": "spin.images.fullscreen.webp.fallback",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.webp.fallback"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1175,
                  "path": "spin.images.fullscreen.webp",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.webp"
                },
                "progressive": {
                  "type": "boolean",
                  "description": "Create progressive image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Progressive",
                  "order": 1177,
                  "path": "spin.images.fullscreen.progressive",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.progressive"
                },
                "brightness": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Brightness",
                  "order": 1178,
                  "path": "spin.images.fullscreen.brightness",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.brightness"
                },
                "contrast": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Contrast",
                  "order": 1179,
                  "path": "spin.images.fullscreen.contrast",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.contrast"
                },
                "exposure": {
                  "type": "number",
                  "minimum": -100,
                  "maximum": 100,
                  "display": {
                    "name": "input/number",
                    "max": 100,
                    "min": -100,
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Exposure",
                  "order": 1180,
                  "path": "spin.images.fullscreen.exposure",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.exposure"
                },
                "grayscale": {
                  "type": "boolean",
                  "description": "Transform the image to black and white",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Grayscale",
                  "order": 1181,
                  "path": "spin.images.fullscreen.grayscale",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.grayscale"
                },
                "blur": {
                  "type": "number",
                  "description": "Apply a blur effect to the image",
                  "display": {
                    "name": "input/number",
                    "fallback": {
                      "name": "input",
                      "type": "number"
                    }
                  },
                  "title": "Blur",
                  "order": 1182,
                  "path": "spin.images.fullscreen.blur",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.blur"
                },
                "tiltshift": {
                  "type": "boolean",
                  "description": "Apply a tilt-shift effect to the image",
                  "display": {
                    "name": "checkbox"
                  },
                  "title": "Tiltshift",
                  "order": 1183,
                  "path": "spin.images.fullscreen.tiltshift",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.tiltshift"
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
                        ],
                        "required": true
                      },
                      "title": "Style",
                      "order": 1185,
                      "path": "spin.images.fullscreen.frame.style",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.frame.style"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1186,
                      "path": "spin.images.fullscreen.frame.color",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.frame.color"
                    },
                    "width": {
                      "type": "number",
                      "display": {
                        "name": "input/number",
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Width",
                      "order": 1187,
                      "path": "spin.images.fullscreen.frame.width",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.frame.width"
                    },
                    "rim": {
                      "color": {
                        "type": "string"
                      },
                      "width": {
                        "type": "number"
                      },
                      "uiPath": "root.spin.images.fullscreen.frame.rim"
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "style"
                  ],
                  "display": {
                    "name": "group"
                  },
                  "order": 1184,
                  "path": "spin.images.fullscreen.frame",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.frame"
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
                        "name": "radiolist",
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
                      "order": 1189,
                      "path": "spin.images.fullscreen.text.style",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.style"
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
                          "order": 1191,
                          "path": "spin.images.fullscreen.text.font.family",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.font.family"
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
                          "order": 1192,
                          "path": "spin.images.fullscreen.text.font.weight",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.font.weight"
                        },
                        "style": {
                          "type": "string",
                          "enum": [
                            "normal",
                            "italic"
                          ],
                          "display": {
                            "name": "radiolist",
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
                          "order": 1193,
                          "path": "spin.images.fullscreen.text.font.style",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.font.style"
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
                          "uiPath": "root.spin.images.fullscreen.text.font.size"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1190,
                      "path": "spin.images.fullscreen.text.font",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.font"
                    },
                    "text": {
                      "type": "string",
                      "maxLength": 100,
                      "display": {
                        "name": "input",
                        "type": "text",
                        "maxlength": 100,
                        "required": true
                      },
                      "title": "Text",
                      "order": 1194,
                      "path": "spin.images.fullscreen.text.text",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.text"
                    },
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1195,
                      "path": "spin.images.fullscreen.text.color",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.color"
                    },
                    "opacity": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 100,
                      "display": {
                        "name": "input/number",
                        "max": 100,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Opacity",
                      "order": 1196,
                      "path": "spin.images.fullscreen.text.opacity",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.opacity"
                    },
                    "background": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1198,
                          "path": "spin.images.fullscreen.text.background.color",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.background.color"
                        },
                        "opacity": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 100,
                          "display": {
                            "name": "input/number",
                            "max": 100,
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Opacity",
                          "order": 1199,
                          "path": "spin.images.fullscreen.text.background.opacity",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.background.opacity"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1197,
                      "path": "spin.images.fullscreen.text.background",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.background"
                    },
                    "outline": {
                      "properties": {
                        "color": {
                          "type": "string",
                          "format": "Color",
                          "display": {
                            "name": "input/color",
                            "fallback": {
                              "name": "input",
                              "type": "color"
                            }
                          },
                          "title": "Color",
                          "order": 1201,
                          "path": "spin.images.fullscreen.text.outline.color",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.outline.color"
                        },
                        "width": {
                          "type": "number",
                          "minimum": 0,
                          "display": {
                            "name": "input/number",
                            "min": 0,
                            "fallback": {
                              "name": "input",
                              "type": "number"
                            }
                          },
                          "title": "Width",
                          "order": 1202,
                          "path": "spin.images.fullscreen.text.outline.width",
                          "level": 6,
                          "uiPath": "root.spin.images.fullscreen.text.outline.width"
                        }
                      },
                      "display": {
                        "name": "group"
                      },
                      "order": 1200,
                      "path": "spin.images.fullscreen.text.outline",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.outline"
                    },
                    "size": {
                      "type": "string",
                      "format": "Percentage",
                      "display": {
                        "name": "input",
                        "type": "text"
                      },
                      "title": "Size",
                      "order": 1203,
                      "path": "spin.images.fullscreen.text.size",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.size"
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
                      "order": 1204,
                      "path": "spin.images.fullscreen.text.position",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.text.position"
                    }
                  },
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1188,
                  "path": "spin.images.fullscreen.text",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.text"
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
                  "order": 1205,
                  "path": "spin.images.fullscreen.colortone",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.colortone"
                },
                "vignette": {
                  "properties": {
                    "color": {
                      "type": "string",
                      "format": "Color",
                      "display": {
                        "name": "input/color",
                        "fallback": {
                          "name": "input",
                          "type": "color"
                        }
                      },
                      "title": "Color",
                      "order": 1207,
                      "path": "spin.images.fullscreen.vignette.color",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.vignette.color"
                    },
                    "value": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 1,
                      "display": {
                        "name": "input/number",
                        "max": 1,
                        "min": 0,
                        "fallback": {
                          "name": "input",
                          "type": "number"
                        }
                      },
                      "title": "Value",
                      "order": 1208,
                      "path": "spin.images.fullscreen.vignette.value",
                      "level": 5,
                      "uiPath": "root.spin.images.fullscreen.vignette.value"
                    }
                  },
                  "additionalProperties": false,
                  "display": {
                    "name": "group"
                  },
                  "order": 1206,
                  "path": "spin.images.fullscreen.vignette",
                  "level": 4,
                  "showInTree": true,
                  "uiPath": "root.spin.images.fullscreen.vignette"
                }
              },
              "display": {
                "name": "group"
              },
              "order": 1159,
              "path": "spin.images.fullscreen",
              "level": 3,
              "showInTree": true,
              "uiPath": "root.spin.images.fullscreen"
            }
          },
          "additionalProperties": false,
          "display": {
            "name": "group:tab"
          },
          "title": "Images",
          "order": 1058,
          "path": "spin.images",
          "level": 2,
          "noGeneralOptions": true,
          "uiPath": "root.spin.images"
        }
      },
      "uiPath": "root.spin"
    }
  },
  "uiPath": "root"
}
