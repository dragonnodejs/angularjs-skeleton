"use strict";

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
                    disabled: process.env.AUTH_DISABLED,
                    realm: process.env.AUTH_REALM,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD
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
