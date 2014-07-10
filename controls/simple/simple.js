"use strict";

//simple controls
angular.module('formarble/controls/simple', ['formarble'])
    .directive('fmInput', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('input')
        }
    })
    .directive('fmTextarea', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('textarea')
        }
    })
    .directive('fmCheckbox', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('checkbox')
        }
    })
    .directive('fmInputRange', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('input-range')
        }
    })
    .directive('fmRadioList', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('radiolist')
        }
    })
    .directive('fmSelect', function (fm) {
        return {
            restrict: 'A',
            templateUrl: fm.urlResolver('select')
        }
    });

//group controls
angular.module('formarble/controls/simple')
    .directive('fmInputGroup', function (fm, $interpolate) {
        return {
            restrict: 'A',
            templateUrl: function (tElem, tAttrs) {
                var $control = tElem.data('$control');

                if ($control.items) {
                    return fm.urlResolver('group-items')(tElem)
                }

                return fm.urlResolver('group')(tElem);
            },

            controllerAs: '$group',
            controller: function ($element, $scope) {
                var $control = $element.data('$control');
                var controlIndex = 0;
                var labelFn;

                if ($control.items) {
                    labelFn = $interpolate(fm.oget($control, 'display.fmInputGroup.label'));

                    this.$items = [];

                    var modelValue = fm.oget($scope.$model, $control._path);
                    // init control model as array
                    if (angular.isUndefined(modelValue)) {
                        modelValue = [];
                        fm.oset($scope.$model, $control._path, modelValue);
                    } else
                    /**
                     * wrap control model in array
                     * todo: make this behavior more explicit, this may be wrong in some cases
                     */
                    if (!angular.isArray(modelValue)) {
                        modelValue = [modelValue];
                        fm.oset($scope.$model, $control._path, modelValue);
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
                    angular.forEach(modelValue, function () {
                        this.addItem();
                    }, this)
                }
            }
        };
    })