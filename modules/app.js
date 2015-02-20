"use strict";
/*global module:false */

/**
 * Express initialization, app service and serves the static files
 * @example
    app: {
        port: process.env.PORT,
        directory: __dirname + '/web'
    }
 */

module.exports = function (config, libraries, services) {
    var compression = libraries.compression,
        express = libraries.express;

    var app = express();
    app.listen(config.port);
    app.use(compression());
    app.use(express.static(config.directory));

    services.app = app;
};
