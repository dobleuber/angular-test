'use strict';

angular.module('myApp.hangman', ['ngRoute', 'myApp.words'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hangman', {
            templateUrl: 'components/hangman/hangman.html',
            controller: 'HangmanCtrl'
        });
    }])
    .controller('HangmanCtrl', function($scope, wordService) {
        $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        $scope.secret = 'angular';
        wordService.get().then(function(res) {
            $scope.secret = 'angular';//res.data;
        });

        $scope.attempts = 0;
        $scope.maxAttempts = 6;

        $scope.chooseLetter = function(char) {
            if($scope.secret.indexOf(char) === -1) {
                $scope.attempts++;
            }
        };

        $scope.isLose = function() {
            return $scope.attempts >= $scope.maxAttempts;
        };

        $scope.resetGame = function() {
            $scope.attempts = 0;
        };
    });
