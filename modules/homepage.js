'use strict';

/**
 * Serves the homepage for the application
 * @example
    homepage: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.render('layout.html.twig', { config: config, env: app.get('env') });
    });
};
