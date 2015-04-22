'use strict';

// Load the vendor dependencies not available in public CDNs

require('../bower_components/angular-bootstrap-show-errors/src/showErrors.js');
require('../bower_components/angular-route/angular-route.js');
require('../bower_components/angular-translate/angular-translate.js');
require('../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js');

// AngularJS and translation provider initialization

var dependencies = [
    'ngRoute',
    'pascalprecht.translate',
    'ui.bootstrap.showErrors',

    require('./controllers/homepage.js'),

    require('./controllers/navigation.js')
];

angular.module('app', dependencies)
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.registerAvailableLanguageKeys(['de', 'en']);
        $translateProvider.determinePreferredLanguage();
    }]);
