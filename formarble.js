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

function schemaGetProperties(schema) {
    return Object.keys(schema.properties).map(function (key) {
        return schema.properties[key];
    }).sort(function(a, b){
        return a.order - b.order;
    })
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
        function getTemplateId(theme, display, fallback) {
            display = fm.getDisplay(display);
            if (display) {
                return theme + '/' + display.name + ((!fallback && display.type) ? ':' + display.type : '');
            }
            return false;
        }

        return {
            get: function (theme, display) {
                var tid, template;
                if (tid = getTemplateId(theme, display)) {
                    template = $templateCache.get(tid);
                    if (!template) {
                        if (tid = getTemplateId(theme, display, true)) {
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
            require: ['ngModel', 'fmForm'],

            scope: {
                '$model': '=ngModel',
                '$control': '=fmSchema'
            },

            controller: function ($scope, $attrs) {
                var theme = $attrs.fmTheme || 'formarble';

                this.set = function (path, value) {
                    objSet($scope.$model, path, value);
                }

                this.get = function (path) {
                    return objGet($scope.$model, path);
                }

                this.getTemplate = function(display) {
                    return fmTemplate.get(theme, display);
                }
            },

            compile: function () {
                return function (scope, elem, attrs, ctrls) {
                    var fmForm = ctrls[1];

                    var control = scope.$control;

                    if(!scope.$model) {
                        // ??? Populate basic model
                        scope.$model = {};
                    }

                    var template = fmForm.getTemplate(control.display);
                    if (template) {
                        elem.html(template);
                        $compile(elem.contents())(scope);

                        if (angular.isObject(control.properties)) {
                            scope.$subControls = schemaGetProperties(control)
                        }
                    } else {
                        console.warn('fmForm: No template', template);
                    }
                }
            }
        }
    })
    .directive('fmControl', function (fmTemplate, $compile) {
        return {
            require: '^fmForm',
            restrict: 'EA',
            scope: true,
            link: function (scope, elem, attrs, ctrl) {
                var control = scope.$eval(attrs.fmControl);
                control.$bindTo = ['$model', control.path].join('.');

                var template = ctrl.getTemplate(control.display);
                if (template) {
                    elem.html(template);

                    scope.$control = control;

                    if (angular.isObject(control.properties)) {
                        scope.$subControls = schemaGetProperties(control);
                    }

                    $compile(elem.contents())(scope);
                } else {
                    console.warn('fmControl: No template', template);
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


                return function (scope, elem, attr, ctrl) {
                    var control = scope.$eval(controlModelName);

                    attr.$set('ngModel', control.$bindTo);

                    attr.$set('id', control.path.split('.').join('-'));

                    if (isInput) {
                        if(!attr.type){
                            attr.$set('type', control.display.type)
                        }

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