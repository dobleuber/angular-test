'use strict';
angular.module('myApp.words', [])
.factory('wordService', function($http) {
    return {
        get: function(){
            return $http.get('http://randomword.setgetgo.com/get.php');
        }
    };
});
