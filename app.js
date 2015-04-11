'use strict';

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_LICENSE_KEY) {
    require('newrelic');
}

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
                    users: process.env.AUTH_USERS,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD,
                    realm: process.env.AUTH_REALM
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
            }],
            [require('dragonnodejs-webserver'), {
                bower: {
                    libraries: ['bootstrap', 'jquery', 'angular'],
                    path: __dirname + '/'
                },
                package: {
                    path: __dirname + '/package.json'
                },
                swig: {
                    views: __dirname + '/views/'
                }
            }]
        ],
        directory: {
            homepage: {
                server: process.env.SERVER
            }
        }
    }
};
require('dragonnodejs')(config);
