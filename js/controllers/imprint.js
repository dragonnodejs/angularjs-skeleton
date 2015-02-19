"use strict";

// Serves the imprint for the application

module.exports = 'controllers/imprint';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('ImprintCtrl', function ($http) {
        var that = this;
        that.config = config;
        if (config.env.server) {
            $http.get(config.env.server + '/')
                .success(function (data) {
                    that.server = data;
                });
        }
    });
