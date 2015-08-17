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
angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree-breadcrumb.html',
    '<div class="hidden-lg btn-toolbar"><div class="btn-group btn-group-sm" ng-repeat-start="i in $tree.breadcrumb track by i.path" ng-if="i.treeItems.length"><button class="btn btn-default" ng-click="$select(i)" ng-class="{\'btn-primary\': $tree.isSelected(i)}">{{i.title}}</button> <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu"><li ng-repeat="i in i.treeItems"><a href="" ng-click="$select(i)">{{i.title}}</a></li></ul></div><div class="btn-group btn-group-sm" ng-repeat-end="" ng-if="!i.treeItems.length"><button type="button" class="btn btn-primary active">{{i.title}}</button></div></div>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree-sidebar.html',
    '<li ng-repeat="i in $items" ng-class="{selected: $tree.isSelected(i), open: $tree.isOpen(i)}"><a href="" ng-click="$select(i)">{{i.title}}</a><ul ng-if="$tree.isOpen(i)" fm-tree-overview="i"></ul></li>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree.html',
    '<h3 class="text-muted" ng-if="!$isSubtree"><a href="" ng-click="$tree.select()">{{$control.title}}</a></h3><div class="row"><div class="col-lg-3" ng-if="!$isSubtree"><div class="visible-lg hidden-sm" fm-tree-overview="$control"></div><div class="hidden-lg" fm-tree-overview="$control" fm-tree-breadcrumb=""></div></div><div ng-class=" {\'col-lg-12\': $isSubtree, \'col-lg-9\': !$isSubtree}"><div ng-if="!$tree.selected && $subControls.length"><div ng-repeat="c in $subControls" fm-control="c"></div></div><div ng-if="!$tree.selected && !$subControls.length"><h3 class="text-muted">Select option in tree</h3></div><div ng-if="$tree.selected"><div fm-control="$tree.selected"></div></div></div></div>');
}]);
