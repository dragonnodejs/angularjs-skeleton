"use strict";
/*global __dirname:false */

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED || !(process.env.AUTH_USER && process.env.AUTH_PASSWORD),
                    realm: process.env.AUTH_REALM,
                    users: function () {
                        var users = {};
                        users[process.env.AUTH_USER] = process.env.AUTH_PASSWORD;
                        return users;
                    }()
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                static: {
                    directory: __dirname + '/web/'
                }
            }]
        ],
        directory: {
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
        }
    }
};
require('dragonnodejs')(config);
