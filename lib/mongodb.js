'use strict';

const mongodb = require('mongodb').MongoClient;

class MongoConnect {

    constructor () {
        this._logger = console;
        this.db = null;
        this.url = 'mongodb://';
    }

    set_logger (logger) {
        this._logger = logger || console;
        return this;
    }

    connect (config) {

        if (config === Object(config)) {
            let auth = '';

            if (config.user) {
                auth = config.user + ':' + (config.password || '');
            }

            if (!!auth) {
                this.url += auth + '@';
            }

            this.url += config.host + ':' + config.port + ':' + '/' + config.database;
        } else {
            this.url === config;
        }

        mongodb.connect(this.url, (err, db) => {
            if (err) {
                this._logger.log('error', 'Error connecting to database');
                throw new Error('Check the db config');
            }  
            this.db = db;
            return this; 
        });
    }

}

module.exports = MongoConnect;