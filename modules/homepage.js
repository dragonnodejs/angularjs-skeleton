"use strict";
/*global module:false */

/**
 * Serves the homepage for the application
 * @example
    homepage: {
        path: '/app.html'
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.redirect(config.path);
    });
};
