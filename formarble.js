"use strict";

//function objSet(obj, path, value) {
//    var segments = path.split('.'),
//        cursor = obj,
//        segment,
//        i;
//
//    for (i = 0; i < segments.length - 1; ++i) {
//        segment = segments[i];
//        cursor = cursor[segment] = cursor[segment] || {};
//    }
//
//    return cursor[segments[i]] = value;
//}
//
//function objGet(obj, path) {
//    var segments = path.split('.'),
//        cursor = obj,
//        len = segments.length,
//        i;
//
//    for (i = 0; i < len; i++) {
//        cursor = cursor[segments[i]];
//
//        if (undefined === cursor) {
//            return;
//        }
//    }
//
//    return cursor;
//}

angular.module('formarble', [])
//    .service('fm', function ($templateCache) {
//        function getTemplateId(display) {
//            if(!display) {
//                return false;
//            }
//
//            if(angular.isString(display)) {
//                return display;
//            }
//
//            return display.name;
//        }
//
//        return {
//            getTemplate: function (theme, display) {
//                var id, template;
//                if (id = getTemplateId(display)) {
//                    id = theme + '/' + id;
//                    template = $templateCache.get(id);
//                }
//                return template;
//            }
//        }
//    })
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
                    return ['$model', control._path || control._path].join('.')
                }

                this.getControlId = function (control){
                    return control.path && control.path.split('.').join('-');
                }

                this.getProperties = function(control) {
                    if (angular.isObject(control.properties)) {
                        return Object.keys(control.properties)
                            .map(function (key) {
                                return control.properties[key];
                            })
                            .sort(function (a, b) {
                                if(angular.isDefined(a.order) && angular.isDefined(b.order)) {
                                    return a.order - b.order;
                                }

                                if(angular.isDefined(a.order)) {
                                    return -1;
                                }

                                if(angular.isDefined(b.order)) {
                                    return 1;
                                }

                                return a._order - b._order;
                            })
                    }
                }
            },
            link: function (scope, elem) {
                if(!elem.find('[fm-control]').length){
                    elem.append('<div fm-control></div>');
                }

                $compile(elem.contents())(scope)
            }
        }
    })
    .directive('fmControl', function ($compile, $injector) {
        var directiveSuffix = 'Directive';

        return {
            require: '^fmForm',
            terminal: true,
            link: function (scope, elem, attrs, ctrl) {
                var controlBinding = attrs.fmControl || '$control',
                    previousScope,
                    previousName;

                scope.$watch(controlBinding, function fmControlWatcher(control) {
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

                    previousScope && previousScope.$destroy();
                    previousName && attrs.$set(previousName, null);

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
                        innerScope.$value = value;
                        innerScope.$empty = undefined === value || null === value || '' === value || angular.equals(value, {}) || angular.equals(value, []);
                    });

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
            require: '^form',
            link: function (scope, elem, attrs, ctrl) {
                function onClick(e) {
                    if(!attrs.ngClick){
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
    })

angular.module('formarble')
    .directive('fmTree', function () {
        return {
            templateUrl: 'bs/tree',
            scope: true,
            controllerAs: '$tree',
            controller: function ($scope, $element, $attrs) {
                var control = $scope.$eval($attrs.fmTree || '$control');

                $scope.$isSubtree = angular.isDefined($element.parent().controller('fmTree'));
                $scope.$subControls = $scope.$subControls.filter(function(sc){
                    return -1 === control.display.tree.indexOf(sc._id);
                })

                this.selected = null;

                this.select = function (item) {
//                    console.debug('tree select', item);
                    this.selected = item;
                }

                this.isGroupOpen = function(item){
                    var isOpen;
//                    try {
                        isOpen = this.selected && this.selected.path.slice(0, item.path.length) === item.path;
//                    } catch(e) {
//                        console.log('Error on', this.selected, item);
//                        throw e;
//                    }
                    return isOpen;
                }
            }
        }
    })
    .directive('fmTreeSidebar', function ($compile, $templateCache) {
        return {
            require: ['^fmTree', '^fmForm'],
            scope: true,
            link: function (scope, elem, attrs, ctrls) {
                var tree = ctrls[0];
                var form = ctrls[1];

                var control = scope.$eval(attrs.fmTreeSidebar);
                if (control.display.tree) {
                    scope.$items = control.display.tree
                        .map(function (name) {
                            return control.properties[name];
                        })
                        .filter(angular.identity)

                    elem.html($templateCache.get('bs/tree/sidebar'));
                    $compile(elem.contents())(scope);
                }

                scope.$select = function(item){
                    tree.select(item);
                }
            }
        }
    })

angular.module('formarble')
    .directive('fmInputGroup', function(){
        return {
            restrict: 'A',
            templateUrl: 'bs/group'
        };
    })
    .directive('fmInput', function () {
        return {
            restrict: 'A',
            templateUrl: 'bs/input'
        }
    })
    .directive('fmTextarea', function () {
        return {
            restrict: 'A',
            templateUrl: 'bs/textarea'
        }
    })
    .directive('fmCheckbox', function () {
        return {
            restrict: 'A',
            templateUrl: 'bs/checkbox'
        }
    })
    .directive('fmInputRange', function () {
        return {
            restrict: 'A',
            templateUrl: 'bs/input/range'
        }
    })

    .directive('fmRadioList', function(){
        return {
            restrict: 'A',
            templateUrl: 'bs/radiolist'
        }
    })
    .directive('fmSelect', function () {
        return {
            restrict: 'A',
            templateUrl: 'bs/select'
        }
    })