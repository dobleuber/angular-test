'use strict';

describe('myApp.key module', function() {
    beforeEach(module('myApp.key'));

    describe('app-key directive', function() {
        var compile, scope;
        beforeEach(inject(function($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        }));

        it('should draw a button', function(){
            var element = compile('<app-key>a</app-key>')(scope);
            expect(element[0].outerHTML).toContain('button');
        });

        it('should draw a button with a letter', function() {
            var element = compile('<app-key>a</app-key>')(scope);
            expect(element.text()).toEqual('a');
        });
    });
});
