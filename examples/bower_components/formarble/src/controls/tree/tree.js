"use strict";

angular.module('formarble/controls/tree', ['formarble'])
    .directive('fmTree', function (fm) {
        return {
            templateUrl: fm.urlResolver('tree'),
            scope: true,
            controllerAs: '$tree',
            controller: function ($scope, $element, $attrs) {
                var ctrl = this;
                var control = $scope.$eval($attrs.fmTree || '$control');

                var firstChild;

                function breadcrumb(_control){
                    var _current = _control;
                    var _items = [];

                    do {
                        _current.treeItems = ctrl.items(_current);

                        _items.push(_current);
                        _current = _current.$parent;
                    } while (_current);

                    return _items.reverse();
                }

                $scope.$isSubtree = angular.isDefined($element.parent().controller('fmTree'));
                $scope.$subControls = $scope.$subControls.filter(function (sc) {
                    if(!firstChild) {
                        firstChild = sc;
                    }

                    return -1 === control.display.tree.indexOf(sc._id);
                });

                this.select = function (item) {
//                    console.debug('tree select', item);
                    this.selected = item;
                    this.breadcrumb = breadcrumb(item);
                };

                this.isSelected = function (item) {
                    return item === this.selected;
                };

                this.isOpen = function (item) {
                    var isOpen = fm.oget(item, 'display.open');
//                    try {
                    isOpen = isOpen || this.selected && this.selected.path.slice(0, item.path.length) === item.path;
//                    } catch(e) {
//                        console.log('Error on', this.selected, item);
//                        throw e;
//                    }
                    return isOpen;
                };

                this.items = function(_control){
                    return (fm.oget(_control, 'display.tree') || [])
                        .map(function (name) {
                            return _control.properties[name];
                        })
                        .filter(angular.identity);
                };

                this.selected = null;

                //open first child control
                if(firstChild && !$scope.$isSubtree && !$scope.$subControls.length) {
                    this.select(firstChild);
                }
            }
        }
    })
    .directive('fmTreeOverview', function ($compile, $templateCache) {
        return {
            require: ['^fmTree', '^fmForm'],
            scope: true,

            link: function (scope, elem, attrs, ctrls) {
                var tree = ctrls[0];
                var form = ctrls[1];

                var template = undefined === attrs.fmTreeBreadcrumb
                    ? 'tree-sidebar'
                    : 'tree-breadcrumb';

                var control = scope.$eval(attrs.fmTreeOverview);
                if (control.display.tree) {
                    scope.$items = tree.items(control);
                    scope.$selected = scope.$items[0];



                    elem.html($templateCache.get(form.getTemplateUrl(template)));
                    $compile(elem.contents())(scope);
                }

                scope.$select = function (item) {
                    scope.$selected = item;
                    tree.select(item);
                };
            }
        }
    });