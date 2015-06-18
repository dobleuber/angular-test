'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {


    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/view1");
    });


    describe('view1', function () {

        beforeEach(function () {
            browser.get('index.html#/view1');
        });


        it('should render view1 when user navigates to /view1', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 1/);
        });

    });


    describe('view2', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });


        it('should render view2 when user navigates to /view2', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 2/);
        });

    });

    describe('hangman view', function () {
        beforeEach(function () {
            browser.get('index.html#/hangman');
        });

        it('should have a hangman page', function() {
            expect(element.all(by.css('[ng-view] svg')).first()).toBeDefined();
        });

        it('should have a hidden stickman', function() {
            expect(element(by.id('svg_12')).isDisplayed()).toBeFalsy();
        });

        it('should keep hidden an element if chose a correct char', function() {
            element.all(by.css('.keyboard button')).get(0).click();
            expect(element(by.id('svg_12')).isDisplayed()).not.toBe(true);
        });

        it('should show an element if chose a wrong char', function() {
            element.all(by.css('.keyboard button')).get(1).click();
            expect(element(by.id('svg_12')).isDisplayed()).toBe(true);
        });

        it('should show an lose message if lose the game', function() {
            element.all(by.css('.keyboard button')).get(1).click();
            element.all(by.css('.keyboard button')).get(2).click();
            element.all(by.css('.keyboard button')).get(3).click();
            element.all(by.css('.keyboard button')).get(4).click();
            element.all(by.css('.keyboard button')).get(5).click();
            element.all(by.css('.keyboard button')).get(6).click();
            element.all(by.css('.keyboard button')).get(7).click();
            expect(element.all(by.css('.lose-message')).first().isDisplayed()).toBe(true);
        });
    });
});
