"use strict"

angular.module('FormarbleExample', ['formarble'])
    .run(function ($rootScope, $window) {
        $rootScope.profile = $window.schema;
        $rootScope.image = $window.schema.properties.image;
        $rootScope.model = {};

        var DEFAULTS = {
            image: {
                quality: 75
            }
        };

        $rootScope.reset = function () {
            $rootScope.model = angular.copy(DEFAULTS);
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

        $rootScope.reset();
    });