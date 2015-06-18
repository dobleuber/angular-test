'use strict';

describe('myApp.hangman module', function() {
    beforeEach(module('myApp.hangman'));

    describe('hangman controller', function() {
        var ctrl, scope;
        beforeEach(inject(function(_$controller_, _$rootScope_, $httpBackend, wordService){
            scope = _$rootScope_.$new();
            $httpBackend.when('GET', 'http://randomword.setgetgo.com/get.php')
                .respond('angular');
            ctrl = _$controller_('HangmanCtrl', { $scope: scope, wordService: wordService});
            $httpBackend.flush();
        }));

        it('Should be defined', function () {
            expect(ctrl).toBeDefined();
        });

        it('Should be have 26 letters', function() {
            expect(scope.letters.length).toBe(26);
        });

        it('Should be max attempts equal to 7', function() {
            expect(scope.maxAttempts).toBe(7);
        });

        it('Should be have a secret word', function() {
            expect(scope.secret).toBeDefined();
        });

        it('Should be attempts zero if I choose the right letter', function(){
            scope.chooseLetter('a');
            expect(scope.attempts).toBe(0);
        });

        it('Should be attempts 1 if I choose a wrong letter', function() {
            scope.chooseLetter('b');
            expect(scope.attempts).toBe(1);
        });

        it('Should be attempts 3 if I choose 3 wrong letters', function() {
            scope.chooseLetter('a');
            scope.chooseLetter('b');
            scope.chooseLetter('c');
            scope.chooseLetter('d');
            scope.chooseLetter('n');
            expect(scope.attempts).toBe(3);
        });

        it('Should be lose a game if the max attempts is reached', function() {
            scope.chooseLetter('b');
            scope.chooseLetter('c');
            scope.chooseLetter('d');
            scope.chooseLetter('f');
            scope.chooseLetter('z');
            scope.chooseLetter('x');
            scope.chooseLetter('y');
            expect(scope.isLose()).toBe(true);
        });

        it('Should be reset the game state', function() {
            scope.chooseLetter('b');
            scope.chooseLetter('c');
            scope.chooseLetter('d');
            scope.chooseLetter('f');
            scope.chooseLetter('z');
            scope.chooseLetter('x');
            scope.chooseLetter('y');
            expect(scope.isLose()).toBe(true);
            scope.resetGame();
            expect(scope.attempts).toBe(0);
        });
    });
});