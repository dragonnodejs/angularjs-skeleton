"use strict";

// Serves the config for the application

module.exports = 'controllers/app';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('AppCtrl', function () {
        this.config = config;
    });
