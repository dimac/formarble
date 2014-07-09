"use strict";

//simple controls
angular.module('formarble.controls', ['formarble']);

//tree view group controls
angular.module('formarble.controls')
    .directive('fmTree', function (fm) {
        return {
            templateUrl: fm.urlResolver('tree'),
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

                    elem.html($templateCache.get(form.getTemplateUrl('tree/sidebar')));
                    $compile(elem.contents())(scope);
                }

                scope.$select = function (item) {
                    tree.select(item);
                }
            }
        }
    })