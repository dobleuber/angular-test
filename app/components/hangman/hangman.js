'use strict';

angular.module('myApp.hangman', [])
    .controller('HangmanCtrl', function($scope) {
        $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        $scope.secret = 'angular';
        $scope.attempts = 0;
        $scope.maxAttempts = 7;

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
