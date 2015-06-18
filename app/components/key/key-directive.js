'use strict';

angular.module('myApp.key', [])
    .directive('appKey', [function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<button ng-transclude ></button>'
        };
    }]);
