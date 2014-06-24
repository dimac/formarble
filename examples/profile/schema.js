window.schema = {
  "title": "Image options",
  "display": {
    "name": "fm-tree",
    "tree": [
      "scale",
      "crop",
      "text",
      "effects"
    ]
  },
  "mapping": {
    "subsampling": "jpeg.subsampling",
    "progressive": "jpeg.progressive",
    "brightness": "effects.brightness",
    "contrast": "effects.contrast",
    "exposure": "effects.exposure",
    "grayscale": "effects.grayscale",
    "colortone": "effects.colortone",
    "blur": "effects.blur",
    "rotate": "effects.rotate",
    "tiltshift": "effects.tiltshift",
    "vignette": "effects.vignette",
    "frame": "effects.frame",
    "scale.option": "scale.options.type"
  },
  "virtual": {
    "webp.quality": "quality",
    "jpeg.quality": "quality"
  },
  "properties": {
    "profile": {
      "type": "string",
      "_id": "profile",
      "_path": "profile",
      "path": "profile",
      "display": {
        "name": "fm-input",
        "type": "text"
      },
      "title": "Profile",
      "_order": 1001,
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
      "_path": "format",
      "path": "format",
      "title": "Format",
      "_order": 1002,
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
          "description": "Width",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
            "hint": "[Number] or [Number]px or [Number]%"
          },
          "_id": "width",
          "_path": "scale.width",
          "path": "scale.width",
          "title": "Width",
          "_order": 1004,
          "level": 2
        },
        "height": {
          "description": "Height",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
            "hint": "[Number] or [Number]px or [Number]%"
          },
          "_id": "height",
          "_path": "scale.height",
          "path": "scale.height",
          "title": "Height",
          "_order": 1005,
          "level": 2
        },
        "options": {
          "properties": {
            "type": {
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
              "_path": "scale.option",
              "path": "scale.options.type",
              "title": "Type",
              "_order": 1007,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "title": "Options",
          "_order": 1006,
          "level": 2
        }
      },
      "display": {
        "name": "fm-input-group"
      },
      "_order": 1003,
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
          "description": "Width",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
            "hint": "[Number] or [Number]px or [Number]%"
          },
          "_id": "width",
          "_path": "crop.width",
          "path": "crop.width",
          "title": "Width",
          "_order": 1009,
          "level": 2
        },
        "height": {
          "description": "Height",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
            "hint": "[Number] or [Number]px or [Number]%"
          },
          "_id": "height",
          "_path": "crop.height",
          "path": "crop.height",
          "title": "Height",
          "_order": 1010,
          "level": 2
        },
        "x": {
          "description": "X offset",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
            "hint": "(+/-) 0-100% or 0-9999px or center"
          },
          "_id": "x",
          "_path": "crop.x",
          "path": "crop.x",
          "title": "X",
          "_order": 1011,
          "level": 2
        },
        "y": {
          "description": "Y offset",
          "display": {
            "name": "fm-input",
            "type": "text",
            "pattern": "/^([\\+\\-]?(100%|\\d{1,2}%|\\d{1,4}px)?|center)$/",
            "hint": "(+/-) 0-100% or 0-9999px or center"
          },
          "_id": "y",
          "_path": "crop.y",
          "path": "crop.y",
          "title": "Y",
          "_order": 1012,
          "level": 2
        }
      },
      "display": {
        "name": "fm-input-group"
      },
      "_order": 1008,
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
        "name": "fm-input",
        "type": "number",
        "max": 256,
        "min": 1
      },
      "title": "Thumbnail",
      "_order": 1013,
      "level": 1
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
      "_id": "quality",
      "_path": "quality",
      "path": "quality",
      "title": "Quality",
      "_order": 1014,
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
            "name": "fm-input",
            "type": "number",
            "max": 9,
            "min": 0
          },
          "title": "Compression",
          "_order": 1016,
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
          "_order": 1017,
          "level": 2
        }
      },
      "display": {
        "name": "fm-input-group"
      },
      "title": "Png",
      "_order": 1015,
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
          "_order": 1019,
          "level": 2
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
          "_id": "quality",
          "_path": "quality",
          "__virtual": true,
          "path": "webp.quality",
          "title": "Quality",
          "_order": 1020,
          "level": 2
        }
      },
      "display": {
        "name": "fm-input-group"
      },
      "title": "Webp",
      "_order": 1018,
      "level": 1
    },
    "text": {
      "title": "Text overlays",
      "display": {
        "name": "fm-input-group"
      },
      "items": {
        "required": [
          "text"
        ],
        "additionalProperties": false,
        "title": "Text overlay",
        "properties": {
          "style": {
            "type": "string",
            "enum": [
              "simple",
              "soft",
              "none"
            ],
            "_id": "style",
            "_path": "style",
            "path": "style",
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
            "_order": 1001,
            "level": 1
          },
          "font": {
            "_id": "font",
            "_path": "font",
            "path": "font",
            "properties": {
              "family": {
                "type": "string",
                "_id": "family",
                "_path": "font.family",
                "path": "font.family",
                "display": {
                  "name": "fm-input",
                  "type": "text"
                },
                "title": "Family",
                "_order": 1003,
                "level": 2
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
                "_path": "font.weight",
                "path": "font.weight",
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
                "_order": 1004,
                "level": 2
              },
              "style": {
                "type": "string",
                "enum": [
                  "normal",
                  "italic"
                ],
                "_id": "style",
                "_path": "font.style",
                "path": "font.style",
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
                "_order": 1005,
                "level": 2
              },
              "size": {
                "display": {
                  "name": "fm-input",
                  "type": "text",
                  "pattern": "/^\\d+(\\.\\d+)?(%|px)?$/",
                  "hint": "[Number] or [Number]px or [Number]%"
                },
                "_id": "size",
                "_path": "font.size",
                "path": "font.size",
                "title": "Size",
                "_order": 1006,
                "level": 2
              }
            },
            "display": {
              "name": "fm-input-group"
            },
            "title": "Font",
            "_order": 1002,
            "level": 1
          },
          "text": {
            "type": "string",
            "maxLength": 100,
            "order": 1,
            "_id": "text",
            "_path": "text",
            "path": "text",
            "display": {
              "name": "fm-input",
              "type": "text",
              "maxlength": 100,
              "required": true
            },
            "title": "Text",
            "_order": 1007,
            "level": 1
          },
          "color": {
            "type": "string",
            "format": "Color",
            "_id": "color",
            "_path": "color",
            "path": "color",
            "display": {
              "name": "fm-input",
              "type": "color"
            },
            "title": "Color",
            "_order": 1008,
            "level": 1
          },
          "opacity": {
            "type": "number",
            "minimum": 0,
            "maximum": 100,
            "_id": "opacity",
            "_path": "opacity",
            "path": "opacity",
            "display": {
              "name": "fm-input",
              "type": "number",
              "max": 100,
              "min": 0
            },
            "title": "Opacity",
            "_order": 1009,
            "level": 1
          },
          "background": {
            "_id": "background",
            "_path": "background",
            "path": "background",
            "properties": {
              "color": {
                "type": "string",
                "format": "Color",
                "_id": "color",
                "_path": "background.color",
                "path": "background.color",
                "display": {
                  "name": "fm-input",
                  "type": "color"
                },
                "title": "Color",
                "_order": 1011,
                "level": 2
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
                "_path": "background.opacity",
                "path": "background.opacity",
                "title": "Opacity",
                "_order": 1012,
                "level": 2
              }
            },
            "display": {
              "name": "fm-input-group"
            },
            "title": "Background",
            "_order": 1010,
            "level": 1
          },
          "outline": {
            "_id": "outline",
            "_path": "outline",
            "path": "outline",
            "properties": {
              "color": {
                "type": "string",
                "format": "Color",
                "_id": "color",
                "_path": "outline.color",
                "path": "outline.color",
                "display": {
                  "name": "fm-input",
                  "type": "color"
                },
                "title": "Color",
                "_order": 1014,
                "level": 2
              },
              "width": {
                "type": "number",
                "minimum": 0,
                "_id": "width",
                "_path": "outline.width",
                "path": "outline.width",
                "display": {
                  "name": "fm-input",
                  "type": "number",
                  "min": 0
                },
                "title": "Width",
                "_order": 1015,
                "level": 2
              }
            },
            "display": {
              "name": "fm-input-group"
            },
            "title": "Outline",
            "_order": 1013,
            "level": 1
          },
          "size": {
            "type": "string",
            "format": "Percentage",
            "_id": "size",
            "_path": "size",
            "path": "size",
            "display": {
              "name": "fm-input",
              "type": "text"
            },
            "title": "Size",
            "_order": 1016,
            "level": 1
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
            "_path": "position",
            "path": "position",
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
            "_order": 1017,
            "level": 1
          }
        },
        "display": {
          "name": "fm-input-group"
        },
        "_order": 1000,
        "level": 0
      },
      "_id": "text",
      "_path": "text",
      "path": "text",
      "_order": 1021,
      "level": 1
    },
    "effects": {
      "display": {
        "name": "fm-tree",
        "tree": [
          "frame",
          "vignette"
        ]
      },
      "_id": "effects",
      "_path": "effects",
      "path": "effects",
      "properties": {
        "rotate": {
          "type": "number",
          "description": "Rotate image (degrees)",
          "minimum": -180,
          "maximum": 180,
          "_id": "rotate",
          "_path": "rotate",
          "path": "effects.rotate",
          "display": {
            "name": "fm-input",
            "type": "number",
            "max": 180,
            "min": -180
          },
          "title": "Rotate",
          "_order": 1023,
          "level": 2
        },
        "brightness": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "order": 1,
          "_id": "brightness",
          "_path": "brightness",
          "path": "effects.brightness",
          "display": {
            "name": "fm-input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Brightness",
          "_order": 1024,
          "level": 2
        },
        "contrast": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "order": 2,
          "_id": "contrast",
          "_path": "contrast",
          "path": "effects.contrast",
          "display": {
            "name": "fm-input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Contrast",
          "_order": 1025,
          "level": 2
        },
        "exposure": {
          "type": "number",
          "minimum": -100,
          "maximum": 100,
          "order": 3,
          "_id": "exposure",
          "_path": "exposure",
          "path": "effects.exposure",
          "display": {
            "name": "fm-input",
            "type": "number",
            "max": 100,
            "min": -100
          },
          "title": "Exposure",
          "_order": 1026,
          "level": 2
        },
        "grayscale": {
          "type": "boolean",
          "description": "Transform the image to black and white",
          "order": 4,
          "_id": "grayscale",
          "_path": "grayscale",
          "path": "effects.grayscale",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Grayscale",
          "_order": 1027,
          "level": 2
        },
        "blur": {
          "type": "number",
          "description": "Apply a blur effect to the image",
          "order": 6,
          "_id": "blur",
          "_path": "blur",
          "path": "effects.blur",
          "display": {
            "name": "fm-input",
            "type": "number"
          },
          "title": "Blur",
          "_order": 1028,
          "level": 2
        },
        "tiltshift": {
          "type": "boolean",
          "description": "Apply a tilt-shift effect to the image",
          "_id": "tiltshift",
          "_path": "tiltshift",
          "path": "effects.tiltshift",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Tiltshift",
          "_order": 1029,
          "level": 2
        },
        "frame": {
          "additionalProperties": false,
          "required": [
            "style"
          ],
          "_id": "frame",
          "_path": "frame",
          "path": "effects.frame",
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
              "_order": 1031,
              "level": 3
            },
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "frame.color",
              "path": "effects.frame.color",
              "display": {
                "name": "fm-input",
                "type": "color"
              },
              "title": "Color",
              "_order": 1032,
              "level": 3
            },
            "width": {
              "type": "number",
              "_id": "width",
              "_path": "frame.width",
              "path": "effects.frame.width",
              "display": {
                "name": "fm-input",
                "type": "number"
              },
              "title": "Width",
              "_order": 1033,
              "level": 3
            },
            "rim": {
              "_id": "rim",
              "_path": "frame.rim",
              "path": "effects.frame.rim",
              "properties": {
                "color": {
                  "type": "string",
                  "format": "Color",
                  "_id": "color",
                  "_path": "frame.rim.color",
                  "path": "effects.frame.rim.color",
                  "display": {
                    "name": "fm-input",
                    "type": "color"
                  },
                  "title": "Color",
                  "_order": 1035,
                  "level": 4
                },
                "width": {
                  "type": "number",
                  "_id": "width",
                  "_path": "frame.rim.width",
                  "path": "effects.frame.rim.width",
                  "display": {
                    "name": "fm-input",
                    "type": "number"
                  },
                  "title": "Width",
                  "_order": 1036,
                  "level": 4
                }
              },
              "display": {
                "name": "fm-input-group"
              },
              "title": "Rim",
              "_order": 1034,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "title": "Frame",
          "_order": 1030,
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
          "order": 5,
          "_id": "colortone",
          "_path": "colortone",
          "path": "effects.colortone",
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
          "_order": 1037,
          "level": 2
        },
        "vignette": {
          "additionalProperties": false,
          "_id": "vignette",
          "_path": "vignette",
          "path": "effects.vignette",
          "properties": {
            "color": {
              "type": "string",
              "format": "Color",
              "_id": "color",
              "_path": "vignette.color",
              "path": "effects.vignette.color",
              "display": {
                "name": "fm-input",
                "type": "color"
              },
              "title": "Color",
              "_order": 1039,
              "level": 3
            },
            "value": {
              "type": "number",
              "minimum": 0,
              "maximum": 1,
              "_id": "value",
              "_path": "vignette.value",
              "path": "effects.vignette.value",
              "display": {
                "name": "fm-input",
                "type": "number",
                "max": 1,
                "min": 0
              },
              "title": "Value",
              "_order": 1040,
              "level": 3
            }
          },
          "display": {
            "name": "fm-input-group"
          },
          "title": "Vignette",
          "_order": 1038,
          "level": 2
        }
      },
      "title": "Effects",
      "_order": 1022,
      "level": 1
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
          "_id": "subsampling",
          "_path": "subsampling",
          "path": "jpeg.subsampling",
          "title": "Subsampling",
          "_order": 1042,
          "level": 2
        },
        "progressive": {
          "type": "boolean",
          "description": "Create progressive image",
          "_id": "progressive",
          "_path": "progressive",
          "path": "jpeg.progressive",
          "display": {
            "name": "fm-checkbox"
          },
          "title": "Progressive",
          "_order": 1043,
          "level": 2
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
          "_id": "quality",
          "_path": "quality",
          "__virtual": true,
          "path": "jpeg.quality",
          "title": "Quality",
          "_order": 1044,
          "level": 2
        }
      },
      "display": {
        "name": "fm-input-group"
      },
      "title": "Jpeg",
      "_order": 1041,
      "level": 1
    }
  },
  "_order": 1000,
  "level": 0
}
