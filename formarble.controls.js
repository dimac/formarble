"use strict";

//simple controls
angular.module('formarble.controls', ['formarble'])
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
    .directive('fmRadioList', function () {
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
    });

//tree view group controls
angular.module('formarble.controls')
    .directive('fmTree', function (fm) {
        return {
            templateUrl: 'bs/tree',
            scope: true,
            controllerAs: '$tree',
            controller: function ($scope, $element, $attrs) {
                var control = $scope.$eval($attrs.fmTree || '$control');

                var firstChild;

                $scope.$isSubtree = angular.isDefined($element.parent().controller('fmTree'));
                $scope.$subControls = $scope.$subControls.filter(function (sc) {
                    if(!firstChild) {
                        firstChild = sc;
                    }

                    return -1 === control.display.tree.indexOf(sc._id);
                })

                this.selected = null;

                this.select = function (item) {
//                    console.debug('tree select', item);
                    this.selected = item;
                }

                this.isSelected = function (item) {
                    return item === this.selected;
                }

                this.isOpen = function (item) {
                    var isOpen = fm.oget(item, 'display.open');
//                    try {
                    isOpen = isOpen || this.selected && this.selected.path.slice(0, item.path.length) === item.path;
//                    } catch(e) {
//                        console.log('Error on', this.selected, item);
//                        throw e;
//                    }
                    return isOpen;
                }

                //open first child control
                if(!$scope.$isSubtree && !$scope.$subControls.length) {
                    this.select(firstChild);
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

                scope.$select = function (item) {
                    tree.select(item);
                }
            }
        }
    })

//group controls
angular.module('formarble.controls')
    .directive('fmInputGroup', function (fm, $interpolate) {
        return {
            restrict: 'A',
            templateUrl: function (tElem, tAttrs) {
                var $control = tElem.data('$control');

                if ($control.items) {
                    return 'bs/group/items'
                }

                return 'bs/group';
            },

            controllerAs: '$group',
            controller: function ($element, $scope) {
                var $control = $element.data('$control');
                var controlIndex = 0;
                var labelFn;

                if ($control.items) {
                    labelFn = $interpolate(fm.oget($control, 'display.fmInputGroup.label'));

                    this.$items = [];
                    //init control model as array
                    if (undefined === fm.oget($scope.$model, $control._path)) {
                        fm.oset($scope.$model, $control._path, []);
                    }

                    this.select = function (item) {
                        if (this.selected) {
                            this.selected.$selected = false;
                        }

                        this.selected = item;

                        if (this.selected) {
                            this.selected.$selected = true;
                        }
                    }

                    this.addItem = function () {
                        var itemControl = angular.copy($control.items);
                        delete itemControl.items;//omit this

                        var base = $control._path + '.' + controlIndex;//array like path
                        itemControl._path = base;//rewrite control base

                        //rewrite children base
                        fm.walkProps(itemControl, function (prop) {
                            prop._path = base + '.' + prop._path;
                        })

                        this.$items.push(itemControl);
                        this.select(itemControl);

                        controlIndex++;
                    }

                    this.removeItem = function (item) {
                        if (!item) {
                            return
                        }

                        var index = this.$items.indexOf(item),
                            len,
                            selectIndex;

                        if (index > -1) {
                            /**
                             * remove model
                             * don't really remove but set to null in order to keep synced model index with its control._path index
                             *
                             * case:
                             *
                             * modelsArray = [model0, model1];
                             *
                             * model0: index => 0, control = {_path: 0};
                             * model1: index => 1, control = {_path: 1};
                             *
                             * remove(modelsArray, model0);
                             *
                             * modelsArray => [model1]
                             *
                             * model1: index => 0
                             * model1: control._path => 1
                             *
                             * error - not synced
                             */
                            fm.oset($scope.$model, item._path, null);
                            //remove control
                            this.$items.splice(index, 1);

                            //select same controlIndex or last item;
                            len = this.$items.length;
                            selectIndex = index < len ? index : len - 1;
                        } else {
                            //first item
                            selectIndex = 0;
                        }

                        this.select(this.$items[selectIndex]);
                    }

                    this.getLabel = function (item) {
                        var labelScope = {
                            index: this.$items.indexOf(item) + 1,
                            control: item,
                            model: fm.oget($scope.$model, item._path)
                        };
                        return labelFn(labelScope);
                    }

                    //add controls for initialized models
                    angular.forEach($scope.$value, function () {
                        this.addItem();
                    }, this)
                }
            }
        };
    })