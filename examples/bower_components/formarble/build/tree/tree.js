"use strict";

angular.module('formarble/controls/tree', ['formarble'])
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

                    elem.html($templateCache.get(form.getTemplateUrl('tree-sidebar')));
                    $compile(elem.contents())(scope);
                }

                scope.$select = function (item) {
                    tree.select(item);
                }
            }
        }
    })
angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree-sidebar.html',
    '<li ng-repeat="i in $items" ng-class="{selected: $tree.isSelected(i), open: $tree.isOpen(i)}"><a href="" ng-click="$select(i)">{{i.title}}</a><ul ng-if="$tree.isOpen(i)" fm-tree-sidebar="i"></ul></li>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree.html',
    '<h3 class="text-muted" ng-if="!$isSubtree"><a href="" ng-click="$tree.select()">{{$control.title}}</a></h3><div class="row"><div class="col-lg-3" ng-if="!$isSubtree"><ol fm-tree-sidebar="$control"></ol></div><div ng-class="{\'col-lg-12\': $isSubtree, \'col-lg-9\': !$isSubtree}"><div ng-if="!$tree.selected && $subControls.length"><div ng-repeat="c in $subControls" fm-control="c"></div></div><div ng-if="!$tree.selected && !$subControls.length"><h3 class="text-muted">Select option in tree</h3></div><div ng-if="$tree.selected"><div fm-control="$tree.selected"></div></div></div></div>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs-4/tree-sidebar.html',
    '<li ng-repeat="i in $items" ng-class="{selected: $tree.isSelected(i), open: $tree.isOpen(i)}"><a href="" ng-click="$select(i)">{{i.title}}</a><ul ng-if="$tree.isOpen(i)" fm-tree-sidebar="i"></ul></li>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs-4/tree.html',
    '<h3 class="text-muted" ng-if="!$isSubtree"><a href="" ng-click="$tree.select()">{{$control.title}}</a></h3><div class="row"><div class="col-lg-3" ng-if="!$isSubtree"><ol fm-tree-sidebar="$control"></ol></div><div ng-class="{\'col-lg-12\': $isSubtree, \'col-lg-9\': !$isSubtree}"><div ng-if="!$tree.selected && $subControls.length"><div ng-repeat="c in $subControls" fm-control="c"></div></div><div ng-if="!$tree.selected && !$subControls.length"><h3 class="text-muted">Select option in tree</h3></div><div ng-if="$tree.selected"><div fm-control="$tree.selected"></div></div></div></div>');
}]);
