"use strict";

function objSet(obj, path, value) {
    var segments = path.split('.'),
        cursor = obj,
        segment,
        i;

    for (i = 0; i < segments.length - 1; ++i) {
        segment = segments[i];
        cursor = cursor[segment] = cursor[segment] || {};
    }

    return cursor[segments[i]] = value;
}
//objGet2 in http://jsperf.com/get-value-by-path
function objGet(obj, path) {
    var segments = path.split('.'),
        cursor = obj,
        len = segments.length,
        i;

    for (i = 0; i < len; i++) {
        cursor = cursor[segments[i]];

        if (undefined === cursor) {
            return;
        }
    }

    return cursor;
}


angular.module('formarble', [])
    .service('fm', function () {
        function parseDisplay(display) {
            if (angular.isString(display)) {
                var parts = display.split(':', 2);
                return {
                    name: parts[0],
                    type: parts[1]
                }
            }

            if (angular.isObject(display) && display.name) {
                return display;
            }

            return false;
        }

        return {
            getDisplay: function (display) {
                return parseDisplay(display);
            }
        }
    })
    .service('fmTemplate', function (fm, $templateCache) {
        var theme = 'formarble';

        function getTemplateId(display, fallback) {
            display = fm.getDisplay(display);
            if (display) {
//                return theme + '/' + display.name + (display.type ? ':' + display.type : '');
                return theme + '/' + display.name + ((!fallback && display.type) ? ':' + display.type : '');
            }
            return false;
        }

        var compiled = {};

        return {
            get: function (display) {
                var tid, template;
                if (tid = getTemplateId(display)) {
                    template = $templateCache.get(tid);
                    if (!template) {
                        if (tid = getTemplateId(display, true)) {
                            template = $templateCache.get(tid);
                        }
                    }
                }
                return template;
            }
        }
    })
    .directive('fmForm', function (fmTemplate, $compile) {
        return {
            restrict: 'EA',
            require: 'ngModel',

            controller: function ($scope, $attrs) {
                var model = $scope.$eval($attrs.ngModel);

                this.set = function (path, value) {
                    objSet(model, path, value);
                }

                this.get = function (path) {
                    return objGet(model, path);
                }

                this.watch = function (path, cb) {
                    return $scope.$watch($attrs.ngModel + '.' + path, cb);
                }
            },

            compile: function () {
                return function (_scope, elem, attrs) {
                    var schema = _scope.$eval(attrs.fmSchema);
                    var scope = _scope.$new(true);

                    var template = fmTemplate.get(schema.display);
                    if (template) {
                        elem.html(template);
                        $compile(elem.contents())(scope);

                        scope.$control = schema;

                        if (angular.isObject(schema.properties)) {
                            scope.$subControls = Object.keys(schema.properties).map(function (key) {
                                return schema.properties[key];
                            });
                        }
                    }
                }
            }
        }
    })
    .directive('fmControl', function (fmTemplate, $compile) {
        function isEmpty(value) {
            return undefined === value || null === value || '' === value;
        }

        return {
            require: '^fmForm',
            restrict: 'EA',
            link: function (_scope, elem, attrs, ctrl) {
                var control = _scope.$eval(attrs.fmControl);
                var scope = _scope.$new();

                var origPathWatcher = function () {
                    return ctrl.get(control.path)
                }
                var localPathWatcher = '$control.value';

                var template = fmTemplate.get(control.display);
                if (template) {
                    elem.html(template);

                    scope.$control = control;

                    if (angular.isObject(control.properties)) {
                        scope.$subControls = Object.keys(control.properties).map(function (key) {
                            return control.properties[key];
                        });
                    } else {
                        control.value = ctrl.get(control.path);
                        scope.$watch(origPathWatcher, function (value, old) {
                            scope.$empty = isEmpty(value);
                            scope.$control.value = value;
                        })
                        scope.$watch(localPathWatcher, function (value, old) {
                            scope.$empty = isEmpty(value);
//                            if (!scope.$empty || !isEmpty(old)) {
                            ctrl.set(control.path, value || null);
//                            }
                        })

                    }

                    $compile(elem.contents())(scope);
                }
            }

        }
    })
    .directive('fmLabel', function () {
        return function (scope, elem, attr) {
            var control = scope.$eval(attr.fmLabel);
            elem.attr({
                for: control.path.split('.').join('-')
            })
        }
    })
    .directive('fmInput', function ($compile) {
        var ngInputPlugins = ['pattern', 'minlength', 'maxlength', 'required'];
        var htmlInputPlugins = ['min', 'max', 'step'];

        function toNgName(name) {
            return 'ng' + name.charAt(0).toUpperCase() + name.slice(1);
        }

        return {
            priority: 200,
            terminal: true,
            compile: function (tElem, tAttrs) {
                var tag = tElem.prop('tagName');
                var isSelect = 'SELECT' === tag;
                var isInput = 'INPUT' === tag;

                var controlModelName = tAttrs.fmInput;

                tAttrs.$set('fmInput', null);
                tAttrs.$set('ngModel', '$control.value');

                return function (scope, elem, attr, ctrl) {
                    var control = scope.$eval(controlModelName);

                    attr.$set('id', control.path.split('.').join('-'));

                    if (isInput) {
                        attr.$set('type', control.display.type)

                        ngInputPlugins.forEach(function (name) {
                            var value = control.display[name];
                            if (angular.isDefined(value)) {
                                attr.$set(toNgName(name), value);
                            }
                        })

                        htmlInputPlugins.forEach(function (name) {
                            var value = control.display[name];
                            if (angular.isDefined(value)) {
                                attr.$set(name, value);
                            }
                        })
                    }

                    if (isSelect) {
                        attr.$set('ngOptions', 'o.id as o.title for o in ' + controlModelName + '.display.options');
                    }

                    $compile(elem)(scope);

                    scope.$input = elem.controller('ngModel');
                }
            }}
    })
    .directive('fmReset', function () {
        return {
            link: function (scope, elem, attrs) {
                var input = scope.$eval(attrs.fmReset);

                function onClick(e) {
                    e.preventDefault();
//                    elem.prop('value', '');
                    input.$setViewValue(undefined);//reset ngModel value
                    input.$setPristine();
                    scope.$apply();
                }

                elem.bind('click', onClick);

                scope.$on('destroy', function () {
                    elem.unbind('click', onClick);
                })
            }
        }
    })