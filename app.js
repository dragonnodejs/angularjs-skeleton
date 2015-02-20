"use strict";
/*global __dirname:false */

// Load the libraries and modules

var config = {
    libraries: {
        express: require('express')
    },
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            app: {
                port: process.env.PORT,
                directory: __dirname + '/web/'
            },
            config: {
                route: '/js/config.js',
                pkg: __dirname + '/package.json',
                env: {
                    server: process.env.SERVER
                }
            }
        }
    }
};
require('dragonnodejs')(config);
