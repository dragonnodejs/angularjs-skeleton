"use strict";
/*global module:false */

/**
 * Serves the config for the application
 * @example
    config: {
        route: '/js/config.js',
        pkg: __dirname + '/package.json',
        env: {}
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    var json = {
        pkg: function () {
            var pkg = require(config.pkg);
            return {
                name: pkg.name,
                version: pkg.version,
                homepage: pkg.homepage
            };
        }(),
        env: config.env
    };
    var js = 'var config = ' + JSON.stringify(json) + ';';

    app.get(config.route, function (req, res) {
        res.send(js);
    });
};
