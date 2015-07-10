module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/components/**/*.js',
            'app/view*/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        preprocessors: {
            'app/components/**/*.js': 'coverage',
            'app/view*/**/*.js': 'coverage'
        },

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        reporters: ['coverage', 'junit'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        singleRun: false
    });
};
