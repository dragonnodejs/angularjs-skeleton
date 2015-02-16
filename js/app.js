"use strict";

// AngularJS and translation provider initialization

var dependencies = [
    'ngRoute',
    'pascalprecht.translate',

    require('./controllers/app.js'),
    require('./controllers/homepage.js')
];

angular.module('app', dependencies)
    .config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.registerAvailableLanguageKeys(['de', 'en']);
        $translateProvider.determinePreferredLanguage();
    });
