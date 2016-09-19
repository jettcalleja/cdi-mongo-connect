'use strict';

const mongodb = require('mongodb').MongoClient;

class MongoConnect {

    constructor () {
        this._logger = console;
        this.db = null;
    }

    set_logger (logger) {
        this._logger = logger || console;
        return this;
    }

    connect (config) {
        mongodb.connect('mongodb://' + config.host + ':' +config.port + '/' + config.database, (err, db) => {
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