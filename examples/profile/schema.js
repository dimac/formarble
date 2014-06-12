window.schema = {
  "title": "Image options",
  "display": {
    "name": "tree",
    "tree": [
      "scale",
      "crop",
      "text",
      "effects"
    ]
  },
  "properties": {
    "profile": {
      "type": "string",
      "_id": "profile",
      "_path": "profile",
      "path": "profile",
      "display": {
        "name": "input",
        "type": "text"
      },
      "title": "Profile",
      "order": 1001,
      "level": 1
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
      "_id": "format",
      "_path": "format",
      "path": "format",
      "title": "Format",
      "order": 1002,
      "level": 1
    },
    "scale": {
      "description": "Scale the image to specified width and height",
      "additionalProperties": false,
      "title": "Scaling options",
      "_id": "scale",
      "_path": "scale",
      "path": "scale",
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
          "_id": "width",
          "_path": "scale.width",
          "path": "scale.width",
          "title": "Width",
          "order": 1004,
          "level": 2
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
          "_id": "height",
          "_path": "scale.height",
          "path": "scale.height",
          "title": "Height",
          "order": 1005,
          "level": 2
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
          "_id": "option",
          "_path": "scale.option",
          "path": "scale.option",
          "title": "Option",
          "order": 1006,
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "order": 1003,
      "level": 1
    },
    "crop": {
      "description": "Crop the image",
      "additionalProperties": false,
      "title": "Crop options",
      "_id": "crop",
      "_path": "crop",
      "path": "crop",
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
          "_id": "width",
          "_path": "crop.width",
          "path": "crop.width",
          "title": "Width",
          "order": 1008,
          "level": 2
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
          "_id": "height",
          "_path": "crop.height",
          "path": "crop.height",
          "title": "Height",
          "order": 1009,
          "level": 2
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
          "_id": "x",
          "_path": "crop.x",
          "path": "crop.x",
          "title": "X",
          "order": 1010,
          "level": 2
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
          "_id": "y",
          "_path": "crop.y",
          "path": "crop.y",
          "title": "Y",
          "order": 1011,
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "order": 1007,
      "level": 1
    },
    "thumbnail": {
      "type": "number",
      "minimum": 1,
      "maximum": 256,
      "description": "Create square thumbnail of specified size",
      "_id": "thumbnail",
      "_path": "thumbnail",
      "path": "thumbnail",
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
      "order": 1012,
      "level": 1
    },
    "tile": {
      "hidden": true,
      "description": "Tile the image",
      "additionalProperties": false,
      "_id": "tile",
      "_path": "tile",
      "path": "tile",
      "properties": {
        "width": {
          "type": "number",
          "minimum": 1,
          "description": "Tile width",
          "_id": "width",
          "_path": "tile.width",
          "path": "tile.width",
          "display": {
            "name": "input/number",
            "min": 1,
            "fallback": {
              "name": "input",
              "type": "number"
            }
          },
          "title": "Width",
          "order": 1013,
          "level": null
        },
        "height": {
          "type": "number",
          "minimum": 1,
          "description": "Tile height",
          "_id": "height",
          "_path": "tile.height",
          "path": "tile.height",
          "display": {
            "name": "input/number",
            "min": 1,
            "fallback": {
              "name": "input",
              "type": "number"
            }
          },
          "title": "Height",
          "order": 1014,
          "level": null
        },
        "number": {
          "type": "number",
          "minimum": 0,
          "_id": "number",
          "_path": "tile.number",
          "path": "tile.number",
          "display": {
            "name": "input/number",
            "min": 0,
            "fallback": {
              "name": "input",
              "type": "number"
            }
          },
          "title": "Number",
          "order": 1015,
          "level": null
        }
      },
      "display": false
    },
    "effects": {
      "properties": {
        "rotate": {
          "type": "number",
          "description": "Rotate image (degrees)",
          "minimum": -180,
          "maximum": 180,
          "path": "effects.rotate",
          "_id": "rotate",
          "_path": "rotate",
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
          "level": 2
        },
        "brightness": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "path": "effects.brightness",
          "_id": "brightness",
          "_path": "brightness",
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
          "order": 1018,
          "level": 2
        },
        "contrast": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "path": "effects.contrast",
          "_id": "contrast",
          "_path": "contrast",
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
          "order": 1019,
          "level": 2
        },
        "exposure": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "path": "effects.exposure",
          "_id": "exposure",
          "_path": "exposure",
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
          "order": 1020,
          "level": 2
        },
        "greyscale": {
          "type": "boolean",
          "description": "Transform the image to black and white",
          "path": "effects.greyscale",
          "_id": "grayscale",
          "_path": "grayscale",
          "display": {
            "name": "checkbox"
          },
          "title": "Greyscale",
          "order": 1021,
          "level": 2
        },
        "blur": {
          "type": "number",
          "description": "Apply a blur effect to the image",
          "path": "effects.blur",
          "_id": "blur",
          "_path": "blur",
          "display": {
            "name": "input/number",
            "fallback": {
              "name": "input",
              "type": "number"
            }
          },
          "title": "Blur",
          "order": 1022,
          "level": 2
        },
        "tiltshift": {
          "type": "boolean",
          "description": "Apply a tilt-shift effect to the image",
          "path": "effects.tiltshift",
          "_id": "tiltshift",
          "_path": "tiltshift",
          "display": {
            "name": "checkbox"
          },
          "title": "Tiltshift",
          "order": 1023,
          "level": 2
        },
        "frame": {
          "additionalProperties": false,
          "required": [
            "style"
          ],
          "path": "effects.frame",
          "_id": "frame",
          "_path": "frame",
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
              "_path": "frame.style",
              "path": "effects.frame.style",
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
              "order": 1025,
              "level": 3
            },
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "frame.color",
              "path": "effects.frame.color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1026,
              "level": 3
            },
            "width": {
              "type": "number",
              "_id": "width",
              "_path": "frame.width",
              "path": "effects.frame.width",
              "display": {
                "name": "input/number",
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Width",
              "order": 1027,
              "level": 3
            },
            "rim": {
              "color": {
                "type": "string"
              },
              "width": {
                "type": "number"
              },
              "_id": "rim",
              "_path": "frame.rim",
              "path": "effects.frame.rim"
            }
          },
          "display": {
            "name": "group"
          },
          "title": "Frame",
          "order": 1024,
          "level": 2
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
          "path": "effects.colortone",
          "_id": "colortone",
          "_path": "colortone",
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
          "order": 1028,
          "level": 2
        },
        "vignette": {
          "additionalProperties": false,
          "path": "effects.vignette",
          "_id": "vignette",
          "_path": "vignette",
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "vignette.color",
              "path": "effects.vignette.color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1030,
              "level": 3
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
              "_id": "value",
              "_path": "vignette.value",
              "path": "effects.vignette.value",
              "title": "Value",
              "order": 1031,
              "level": 3
            }
          },
          "display": {
            "name": "group"
          },
          "title": "Vignette",
          "order": 1029,
          "level": 2
        }
      },
      "_id": "effects",
      "path": "effects",
      "display": {
        "name": "group"
      },
      "title": "Effects",
      "order": 1016,
      "level": 1
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
      "_id": "subsampling",
      "_path": "subsampling",
      "path": "subsampling",
      "title": "Subsampling",
      "order": 1032,
      "level": 1
    },
    "quality": {
      "type": "number",
      "description": "Image quality",
      "minimum": 0,
      "maximum": 100,
      "_id": "quality",
      "_path": "quality",
      "path": "quality",
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
      "order": 1033,
      "level": 1
    },
    "progressive": {
      "type": "boolean",
      "description": "Create progressive image",
      "_id": "progressive",
      "_path": "progressive",
      "path": "progressive",
      "display": {
        "name": "checkbox"
      },
      "title": "Progressive",
      "order": 1034,
      "level": 1
    },
    "png": {
      "additionalProperties": false,
      "_id": "png",
      "_path": "png",
      "path": "png",
      "properties": {
        "compression": {
          "type": "number",
          "description": "PNG compression",
          "minimum": 0,
          "maximum": 9,
          "_id": "compression",
          "_path": "png.compression",
          "path": "png.compression",
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
          "order": 1036,
          "level": 2
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
          "_path": "png.filtering",
          "path": "png.filtering",
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
          "order": 1037,
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "title": "Png",
      "order": 1035,
      "level": 1
    },
    "webp": {
      "additionalProperties": false,
      "_id": "webp",
      "_path": "webp",
      "path": "webp",
      "properties": {
        "fallback": {
          "type": "string",
          "enum": [
            "png",
            "jpg"
          ],
          "_id": "fallback",
          "_path": "webp.fallback",
          "path": "webp.fallback",
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
          "order": 1039,
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "title": "Webp",
      "order": 1038,
      "level": 1
    },
    "text": {
      "required": [
        "text"
      ],
      "additionalProperties": false,
      "_id": "text",
      "_path": "text",
      "path": "text",
      "properties": {
        "style": {
          "type": "string",
          "enum": [
            "simple",
            "soft",
            "none"
          ],
          "_id": "style",
          "_path": "text.style",
          "path": "text.style",
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
          "order": 1041,
          "level": 2
        },
        "font": {
          "_id": "font",
          "_path": "text.font",
          "path": "text.font",
          "properties": {
            "family": {
              "type": "string",
              "_id": "family",
              "_path": "text.font.family",
              "path": "text.font.family",
              "display": {
                "name": "input",
                "type": "text"
              },
              "title": "Family",
              "order": 1043,
              "level": 3
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
              "_path": "text.font.weight",
              "path": "text.font.weight",
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
              "order": 1044,
              "level": 3
            },
            "style": {
              "type": "string",
              "enum": [
                "normal",
                "italic"
              ],
              "_id": "style",
              "_path": "text.font.style",
              "path": "text.font.style",
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
              "order": 1045,
              "level": 3
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
              "_id": "size",
              "_path": "text.font.size",
              "path": "text.font.size"
            }
          },
          "display": {
            "name": "group"
          },
          "title": "Font",
          "order": 1042,
          "level": 2
        },
        "text": {
          "type": "string",
          "maxLength": 100,
          "_id": "text",
          "_path": "text.text",
          "path": "text.text",
          "display": {
            "name": "input",
            "type": "text",
            "maxlength": 100,
            "required": true
          },
          "title": "Text",
          "order": 1046,
          "level": 2
        },
        "color": {
          "type": "string",
          "format": "Color",
          "_id": "color",
          "_path": "text.color",
          "path": "text.color",
          "display": {
            "name": "input/color",
            "fallback": {
              "name": "input",
              "type": "color"
            }
          },
          "title": "Color",
          "order": 1047,
          "level": 2
        },
        "opacity": {
          "type": "number",
          "minimum": 0,
          "maximum": 100,
          "_id": "opacity",
          "_path": "text.opacity",
          "path": "text.opacity",
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
          "order": 1048,
          "level": 2
        },
        "background": {
          "_id": "background",
          "_path": "text.background",
          "path": "text.background",
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "text.background.color",
              "path": "text.background.color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1050,
              "level": 3
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
              "_id": "opacity",
              "_path": "text.background.opacity",
              "path": "text.background.opacity",
              "title": "Opacity",
              "order": 1051,
              "level": 3
            }
          },
          "display": {
            "name": "group"
          },
          "title": "Background",
          "order": 1049,
          "level": 2
        },
        "outline": {
          "_id": "outline",
          "_path": "text.outline",
          "path": "text.outline",
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "text.outline.color",
              "path": "text.outline.color",
              "display": {
                "name": "input/color",
                "fallback": {
                  "name": "input",
                  "type": "color"
                }
              },
              "title": "Color",
              "order": 1053,
              "level": 3
            },
            "width": {
              "type": "number",
              "minimum": 0,
              "_id": "width",
              "_path": "text.outline.width",
              "path": "text.outline.width",
              "display": {
                "name": "input/number",
                "min": 0,
                "fallback": {
                  "name": "input",
                  "type": "number"
                }
              },
              "title": "Width",
              "order": 1054,
              "level": 3
            }
          },
          "display": {
            "name": "group"
          },
          "title": "Outline",
          "order": 1052,
          "level": 2
        },
        "size": {
          "type": "string",
          "format": "Percentage",
          "_id": "size",
          "_path": "text.size",
          "path": "text.size",
          "display": {
            "name": "input",
            "type": "text"
          },
          "title": "Size",
          "order": 1055,
          "level": 2
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
          "_path": "text.position",
          "path": "text.position",
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
          "order": 1056,
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "title": "Text",
      "order": 1040,
      "level": 1
    }
  },
  "_id": "",
  "path": "",
  "order": 1000,
  "level": 0
}
