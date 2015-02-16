"use strict";

var config = {
    libraries: {
        express: require('express')
    },
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            app: {
                port: process.env.PORT
            },
            config: {
                route: '/js/config.js',
                pkg: __dirname + '/package.json',
                env: {}
            },
            homepage: {
                path: '/app.html'
            },
            static: {
                directory: __dirname + '/web/'
            }
        }
    }
};
require('dragonnodejs')(config);
