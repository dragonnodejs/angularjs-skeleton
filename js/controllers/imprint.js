"use strict";
/*global module:false */

// Serves the imprint for the application

module.exports = 'controllers/imprint';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('ImprintCtrl', function ($scope, $http) {
        $scope.config = config;
        if (config.env.server) {
            $http.get(config.env.server + '/')
                .success(function (data) {
                    $scope.server = data;
                });
        }
    });
