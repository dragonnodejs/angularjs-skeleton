"use strict";
/*global module:false */

/*
 * Express initialization and app service
 * @example
    app: {
        port: process.env.PORT
    }
 */

module.exports = function (config, libraries, services) {
    var express = libraries.express;

    var app = express();
    app.listen(config.port);

    services.app = app;
};
