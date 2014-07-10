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
                if(collection) {
                    if (collection.splice) {
                        collection.splice(removeId, 1)
                    } else {
                        delete collection[removeId];
                    }
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
                return undefined === value || null === value || angular.equals(value, {}) || angular.equals(value, []);
            },
            urlResolver: function(name){
                return function(tElem, tAttrs){
                    return tElem.controller('fmForm').getTemplateUrl(name);
                }
            }
        };
        return  fmUtils
    })
    .directive('fmForm', function ($compile, fm) {
        return {
            restrict: 'EA',
            require: 'fmForm',

            scope: {
                $control: '=fmForm',
                $model: '=fmModel'
            },

            terminal: true,

            controllerAs: '$form',
            controller: function ($scope, $attrs) {
                if(angular.isUndefined($scope.$model)) {
                    throw new Error('Looks like fmModel attribute is not set or model is undefined yet')
                }

                this.hasValue = function (path) {
                    return undefined !== fm.oget($scope.$model, path._path || path);
                }

                this.getValue = function (path) {
                    return fm.oget($scope.$model, path._path || path);
                }

                this.setValue = function (path, value) {
                    return fm.oset($scope.$model, path._path || path, value);
                }

                this.delValue = function (path) {
                    return fm.odel($scope.$model, path._path || path);
                }

                this.getTemplateUrl = function(name){
                    return ($attrs.fmTheme || 'default') + '/' + name + '.html';
                }

                this.getControlModel = function (control) {
                    return ['$model', control._path].join('.')
                }

                this.getControlId = function (control) {
                    return control._path && control._path.split('.').join('-');
                }

                this.hasChildren = function (control){
                    return undefined !== control.properties;
                }

                this.getChildren = function (control) {
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
            link: function (scope, elem, attrs, form) {
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

                    control.$id = form.getControlId(control);
                    control.$model = form.getControlModel(control);

                    innerScope.$control = control;
                    innerScope.$subControls = form.getChildren(control);

                    if(!form.hasChildren(control)) {
                        innerScope.$useDefault = !form.hasValue(control);

                        innerScope.$setRecommended = function(){
                            if(angular.isDefined(control.recommend)){
                                form.setValue(control, control.recommend);
                            }
                            innerScope.$useDefault = false;
                        };

                        innerScope.$setEmpty = function(){
                            form.delValue(control);
                            innerScope.$useDefault = true;
                        };

                        scope.$watch(control.$model, function (value) {
                            control.$value = innerScope.$value = value;
                            control.$empty = innerScope.$empty = (undefined === value) || (null === value);
                        });
                    }

                    elem.data('$control', control);

                    $compile(elem)(innerScope);
                })
            }

        }
    })
    .directive('fmControlLabel', function (fm) {
        return {
            templateUrl: fm.urlResolver('control-label'),
            link: function (scope, elem, attrs) {
                var control = scope.$eval(attrs.fmControlLabel || '$control');
                if (undefined === attrs.for) {
                    attrs.$set('for', control.$id);
                }
            }
        }
    })
    .directive('fmControlEmpty', function (fm) {
        return {
            priority: 600,//>= ng-if priority
            templateUrl: fm.urlResolver('control-empty')
        }
    })
    .directive('fmControlInput', function ($compile, fm) {
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