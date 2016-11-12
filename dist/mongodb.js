'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongodb = require('mongodb').MongoClient;

var MongoConnect = function () {
    function MongoConnect() {
        _classCallCheck(this, MongoConnect);

        this._logger = console;
        this.db = null;
        this.url = 'mongodb://';
    }

    _createClass(MongoConnect, [{
        key: 'set_logger',
        value: function set_logger(logger) {
            this._logger = logger || console;
            return this;
        }
    }, {
        key: 'connect',
        value: function connect(config) {
            var _this = this;

            if (config === Object(config)) {
                var auth = '';

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

            mongodb.connect(this.url, function (err, db) {
                if (err) {
                    _this._logger.log('error', 'Error connecting to database');
                    throw new Error('Check the db config');
                }
                _this.db = db;
                return _this;
            });
        }
    }]);

    return MongoConnect;
}();

module.exports = MongoConnect;