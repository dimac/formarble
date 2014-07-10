angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree-sidebar.html',
    '<li ng-repeat="i in $items" ng-class="{selected: $tree.isSelected(i), open: $tree.isOpen(i)}"><a href="" ng-click="$select(i)">{{i.title}}</a><ul ng-if="$tree.isOpen(i)" fm-tree-sidebar="i"></ul></li>');
}]);

angular.module('formarble/controls/tree').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/tree.html',
    '<h3 class="text-muted" ng-if="::!$isSubtree"><a href="" ng-click="$tree.select()">{{::$control.title}}</a></h3><div class="row"><div class="col-lg-3" ng-if="::!$isSubtree"><ol fm-tree-sidebar="$control"></ol></div><div ng-class=":: {\'col-lg-12\': $isSubtree, \'col-lg-9\': !$isSubtree}"><div ng-if="!$tree.selected && $subControls.length"><div ng-repeat="c in ::$subControls" fm-control="c"></div></div><div ng-if="!$tree.selected && !$subControls.length"><h3 class="text-muted">Select option in tree</h3></div><div ng-if="$tree.selected"><div fm-control="$tree.selected"></div></div></div></div>');
}]);
