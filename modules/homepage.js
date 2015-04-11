'use strict';

/**
 * Serves the homepage for the application
 * @example
    homepage: {
        server: process.env.SERVER
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.render('layout.html.twig', { server: config.server });
    });
};
