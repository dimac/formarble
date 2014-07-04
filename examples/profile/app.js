"use strict"

angular.module('FormarbleExample', ['formarble', 'formarble.controls'])
    .run(function ($rootScope, $window) {
        $rootScope.schema = $window.schema;
        $rootScope.model = {
            "image": {
                "text": {
                        "text": "overlay 3",
                        "background": {
                            "opacity": 22
                        }
                    }
            },
            "spin": {
                "images": {
                    "fullscreen": {
                        "text": [
                            {
                                "text": "My text overlay with very long text",
                                "style": "soft",
                                "background": {
                                    "opacity": "75"
                                }
                            }
                        ]
                    },
                    "zoom": {
                        "text": [
                            {"text": "Spin zoom image text overlay 1"},
                            {
                                "text": "North text",
                                "position": "north",
                                "style": "simple",
                                "font": {
                                    "family": "Ubuntu"
                                }
                            }
                        ]
                    }
                }
            }
        }

        function filterEmpty(obj) {
            function notEmpty(value) {
                if(_.isBoolean(value) || _.isNumber(value) || !_.isEmpty(value)) {
                    return value;
                }
            }

            function _mapper(value, key) {
                if (_.isArray(value)) {
                    value = _(value).map(_mapper).filter(angular.isDefined).value();
                } else
                if (_.isPlainObject(value)) {
                    value = _(value).mapValues(_mapper).pick(angular.isDefined).value();
                }
                return notEmpty(value);
            }

            return _mapper(obj);
        }

        $rootScope.$watch('model', function (value) {
            $rootScope.modelFiltered = filterEmpty(value);
        }, true)
    })