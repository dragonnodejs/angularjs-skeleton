"use strict";
/*global module:false */

/**
 * Serves the config for the application
 * @example
    config: {
        route: '/js/config.js',
        config: function () {
            var pkg = require(__dirname + '/package.json');
            return {
                name: pkg.name,
                version: pkg.version,
                homepage: pkg.homepage,
                server: process.env.SERVER
            };
        }()
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    var js = 'var config = ' + JSON.stringify(config.config) + ';';
    app.get(config.route, function (req, res) {
        res.send(js);
    });
};
