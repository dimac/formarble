"use strict";

angular.module('formarble', [])
    .service('fm', function () {
        var isNumericTest = /^\d+$/;

        var fmUtils = {
            oget: function objGet(obj, path) {
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
            },
            oset: function objSet(obj, path, value) {
                var segments = path.split('.'),
                    cursor = obj,
                    segment,
                    i;

                for (i = 0; i < segments.length - 1; ++i) {
                    segment = segments[i];

                    if (undefined === cursor[segment]) {
                        cursor[segment] = isNumericTest.test(segments[i + 1]) ? [] : {}
                    }

                    cursor = cursor[segment];
                }

                return cursor[segments[i]] = value;
            },
            odel: function objDelete(obj, path) {
                var segments = path.split('.');

                var removeId = segments.pop();
                var removePath = segments.join('.');

                var collection = fmUtils.oget(obj, removePath);

                if (collection.splice) {
                    collection.splice(removeId, 1)
                } else {
                    delete collection[removeId];
                }

                return obj;
            },
            walkProps: function walkProps(control, fn) {
                angular.forEach(control.properties, function (prop) {
                    fn(prop);
                    fmUtils.walkProps(prop, fn);
                })
            },
            isEmpty: function isEmpty(value) {
                return undefined === value || null === value || '' === value || angular.equals(value, {}) || angular.equals(value, []);
            }
        };
        return  fmUtils
    })
    .directive('fmForm', function ($compile) {
        return {
            restrict: 'EA',
            require: 'fmForm',

            scope: {
                $control: '=fmForm',
                $model: '=ngModel'
            },

            terminal: true,

            controllerAs: '$form',
            controller: function ($scope, $attrs) {
                this.getControlModel = function (control) {
                    return ['$model', control._path].join('.')
                }

                this.getControlId = function (control) {
                    return control._path && control._path.split('.').join('-');
                }

                this.getProperties = function (control) {
                    if (angular.isObject(control.properties)) {
                        return Object.keys(control.properties)
                            .map(function (key) {
                                return control.properties[key];
                            })
                            .sort(function (a, b) {
                                if (angular.isDefined(a.order) && angular.isDefined(b.order)) {
                                    return a.order - b.order;
                                }

                                if (angular.isDefined(a.order)) {
                                    return -1;
                                }

                                if (angular.isDefined(b.order)) {
                                    return 1;
                                }

                                return a._order - b._order;
                            })
                    }
                }
            },
            link: function (scope, elem) {
                if (!elem.find('[fm-control]').length) {
                    elem.append('<div fm-control></div>');
                }

                $compile(elem.contents())(scope)
            }
        }
    })
    .directive('fmControl', function ($compile, $injector, fm) {
        var directiveSuffix = 'Directive';

        return {
            require: '^fmForm',
            terminal: true,
            link: function (scope, elem, attrs, ctrl) {
                var controlBinding = attrs.fmControl || '$control',
                    previousScope,
                    previousName;

                scope.$watch(controlBinding, function fmControlWatcher(control) {
                    previousScope && previousScope.$destroy();
                    previousName && attrs.$set(previousName, null);
                    elem.html('');

                    if (!control) {
                        return;
                    }

                    if (!control.display) {
                        console.warn('fmControl', 'Display options not defined', control);
                        return;
                    }

                    var directiveName = attrs.$normalize(control.display.name),
                        innerScope;

                    if (!$injector.has(directiveName + directiveSuffix)) {
                        console.warn('fmControl', 'No directive', directiveName, 'defined', control);
                        return;
                    }

                    previousScope = innerScope = scope.$new();
                    previousName = directiveName;

                    attrs.$set('fmControl', null);
                    attrs.$set('ngRepeat', null);
                    attrs.$set(directiveName, '');

                    control.$id = ctrl.getControlId(control);
                    control.$model = ctrl.getControlModel(control);

                    innerScope.$control = control;
                    innerScope.$subControls = ctrl.getProperties(control);

                    scope.$watch(control.$model, function (value) {
                        control.$value = innerScope.$value = value;
                        control.$empty = innerScope.$empty = fm.isEmpty(value);
                    });

                    elem.data('$control', control);

                    $compile(elem)(innerScope);
                })
            }

        }
    })
    .directive('fmControlLabel', function () {
        return {
            templateUrl: 'bs/control-label',
            link: function (scope, elem, attrs) {
                var control = scope.$eval(attrs.fmControlLabel || '$control');
                if (undefined === attrs.for) {
                    attrs.$set('for', control.$id);
                }
            }
        }
    })
    .directive('fmControlInput', function ($compile) {
        var ngInputPlugins = ['pattern', 'minlength', 'maxlength', 'required'];
        var htmlInputPlugins = ['min', 'max', 'step'];

        function toNgName(name) {
            return 'ng' + name.charAt(0).toUpperCase() + name.slice(1);
        }

        return {
            require: '^fmForm',
            priority: 200,
            terminal: true,
            compile: function (tElem, tAttrs) {
                var tag = tElem.prop('tagName');
                var isSelect = 'SELECT' === tag;
                var isInput = 'INPUT' === tag || 'TEXTAREA' === tag;

                var controlModelName = tAttrs.fmControlInput || '$control';

                tAttrs.$set('fmControlInput', null);

                return function (scope, elem, attr, ctrl) {
                    var control = scope.$eval(controlModelName);

                    attr.$set('ngModel', control.$model);
                    attr.$set('id', control.$id);

                    if (isInput) {
                        if (!attr.type) {
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
            require: '^form',
            link: function (scope, elem, attrs, ctrl) {
                function onClick(e) {
                    if (!attrs.ngClick) {
                        e.preventDefault();
                    }

                    scope.$apply(scope.$control.$model + ' = undefined');
                    ctrl.$setPristine();
                }

                elem.bind('click', onClick);
                scope.$on('destroy', function () {
                    elem.unbind('click', onClick);
                })
            }
        }
    });