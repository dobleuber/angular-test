'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function () {
        var view1Ctrl, scope;
        beforeEach(inject(function(_$controller_, _$rootScope_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            scope = _$rootScope_.$new();
            view1Ctrl = _$controller_('View1Ctrl', {$scope: scope});
        }));

        it('should be defined', function () {
            //spec body
            expect(view1Ctrl).toBeDefined();
        });

        it('should be have five elements', function(){
            expect(scope.elements.length).toBe(5);
        });
    });
});