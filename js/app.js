'use strict';

// AngularJS and translation provider initialization

var dependencies = [
    'ngRoute',
    'pascalprecht.translate',
    'ui.bootstrap.showErrors',

    require('./controllers/homepage.js'),

    require('./controllers/navigation.js')
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
