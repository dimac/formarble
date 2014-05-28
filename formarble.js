"use strict";


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
            require: '^form',

            compile: function () {
                return function (_scope, elem, attrs) {
                    var schema = _scope.$eval(attrs.fmSchema);
                    var model = _scope.$eval(attrs.fmModel);
                    var scope = _scope.$new(true);

//                    scope.$model = {};
//                    scope.$watch('$model', function () {
//                        Object.keys(scope.$model).forEach(function (key) {
//                            var quotedVal = JSON.stringify(scope.$model[key])
//                            var expr = attrs.fmModel + '.' + key + '=' + quotedVal;
//                            console.log(expr);
//                            _scope.$eval(expr);
//                        })
//                    }, true);

                    scope.pathChanged = function (path, value) {
                        var quotedVal = JSON.stringify(value);
                        var expr = attrs.fmModel + '.' + path + '=' + quotedVal;
                        console.log(expr);
                        _scope.$eval(expr);
                    }

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
            restrict: 'EA',
            link: function (_scope, elem, attrs) {
                var control = _scope.$eval(attrs.fmControl);
                var scope = _scope.$new();

                var template = fmTemplate.get(control.display);
                if (template) {
                    elem.html(template);

                    scope.$control = control;

                    if (angular.isObject(control.properties)) {
                        scope.$subControls = Object.keys(control.properties).map(function (key) {
                            return control.properties[key];
                        });
                    } else {
                        scope.$model = null;
                        var pathModel = '$model';
//                        elem.find('[fm-input],[fm-select]').attr('ng-model', pathModel);
                        scope.$watch(pathModel, function (value, old) {
//                            console.log(control.path, value, old);
                            if (!isEmpty(value) || !isEmpty(old)) {
                                scope.pathChanged(control.path, value, old);
                            }
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
                tAttrs.$set('ngModel', '$model');

                return function (scope, elem, attr) {
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
                        attr.$set('ngOptions', 'o for o in ' + controlModelName + '.display.options');
                    }

                    $compile(elem)(scope);

                    scope.$input = elem.controller('ngModel');
                }
            }}
    })