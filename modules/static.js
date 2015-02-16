"use strict";

/**
 * Serves the static files for the application
 * @example
    static: {
        directory: __dirname + '/web'
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        express = libraries.express;

    app.use(express.static(config.directory));
};
