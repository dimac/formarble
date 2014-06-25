"use strict"

angular.module('FormarbleExample', ['formarble'])
    .run(function ($rootScope, $window) {
        $rootScope.schema = $window.schema;
        $rootScope.model = {
            "image": {
                "text": [
                    {"text": "overlay 1"},
                    {"text": "overlay 2"},
                    {
                        "text": "overlay 3",
                        "background": {
                            "opacity": 22
                        }
                    }
                ]
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

        function modelFilter(value, key) {
            if (_.isArray(value) || _.isString(value)) {
                return 0 === value.length ? undefined : value;
            }

            if (_.isObject(value)) {
                var filtred = _.mapValues(value, modelFilter);
                return angular.equals(filtred, {}) ? undefined : filtred;
            }

            if (null === value) {
                return undefined;
            }

            return value;
        }

        $rootScope.$watch('model', function (value) {
            $rootScope.modelFiltered = _.mapValues(value, modelFilter)
        }, true)
    })