angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/checkbox.html',
    '<div class="form-group"><label class="control-label col-sm-4" fm-control-label=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><div class="checkbox"><label><input type="checkbox" fm-control-input="">{{$control.description}}</label><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p></div></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/control-empty.html',
    '<p class="form-control-static text-muted"><a href="" title="Click to change" ng-click="$setRecommended()">{{$control.defaultHint || \'System default\'}}</a></p>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/control-label.html',
    '{{$control.title}} <a class="control-help" ng-if="$control.display.hint" title="{{$control.display.hint}}"><i class="glyphicon glyphicon-info-sign"></i></a>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/group-items.html',
    '<p class="text-muted">{{$control.title}}</p><ul class="nav nav-tabs"><li><a href="" ng-click="$group.addItem()"><i class="glyphicon glyphicon-plus"></i></a></li><li ng-class="{active: c.$selected}" ng-repeat="c in $group.$items"><a href="" ng-click="$group.select(c)">{{$group.getLabel(c)}}</a></li><li class="pull-right"><a href="" ng-click="$group.removeItem($group.selected)"><i class="glyphicon glyphicon-minus"></i></a></li></ul><div ng-if="!$group.selected"><h3 class="text-center text-muted">Create or select an item first</h3></div><div fm-control="$group.selected"></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/group.html',
    '<div><p class="text-muted">{{$control.title}}</p><div ng-repeat="c in $subControls" fm-control="c"></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/input-range.html',
    '<div class="form-group" ng-class="{\'has-error\': $input.$invalid}"><label class="control-label col-sm-4" fm-control-label=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><div class="input-group"><input class="form-control" type="range" fm-control-input=""><span class="input-group-addon" style="min-width: 60px">{{$empty ? \'Auto\' : $value}}</span></div><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p><p ng-if="$control.description" class="help-block">{{$control.description}}</p></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/input.html',
    '<div class="form-group" ng-class="{\'has-error\': $input.$dirty && $input.$invalid}"><label class="control-label col-sm-4" fm-control-label=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><input class="form-control" fm-control-input=""><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p><p ng-if="$control.description" class="help-block">{{$control.description}}</p></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/radiolist.html',
    '<div class="form-group"><label class="control-label col-sm-4" fm-control-label="" for=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p><div class="radio" ng-repeat="li in $control.display.options"><label><input type="radio" fm-control-input="" ng-value="li.id">{{li.title}}</label></div></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/select.html',
    '<div class="form-group"><label class="control-label col-sm-4" fm-control-label=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><select class="form-control" fm-control-input=""></select><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p></div></div>');
}]);

angular.module('formarble/controls/simple').run(['$templateCache', function($templateCache) {
  $templateCache.put('bs/textarea.html',
    '<div class="form-group" ng-class="{\'has-error\': $input.$dirty && $input.$invalid}"><label class="control-label col-sm-4" fm-control-label=""></label><div class="col-sm-8" ng-if="$useDefault" fm-control-empty=""></div><div class="col-sm-8" ng-hide="$useDefault"><textarea class="form-control" fm-control-input=""></textarea><p class="help-block pull-right"><a href="" ng-click="$setEmpty()">use default</a></p><p ng-if="$control.description" class="help-block">{{$control.description}}</p></div></div>');
}]);
