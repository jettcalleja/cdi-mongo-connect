# cdi-mongo-connect

Made for our [boilerplate](https://github.com/jettcalleja/cdi-mongo-express).

# Install

```sh
npm install cdi-mongo-connect --save
```

# Feature(s?)

* Mongo connect only once! 

# Usage

### Adding database config
On your index.js / server.js / app.js, register your database using a key.
```javascript
const mongo = require('cdi-mongo-connect');

mongo.connect({
    host: 'localhost',
    port: 27017,
    database: 'testdb'
});

// with auth
mongo.connect({
    host: 'localhost',
    user: 'john',
    password: 'password',
    port: 27017,
    database: 'testdb'
});

// with URL string
mongo.connect('mongodb://localhost:27017/myproject');

```
### Doing a single query
After registering a db key and config, you can now start querying.
```javascript
const mongo = require('cdi-mongo-connect');
/* ... */
const user  = mongo.db.collection('user');

user
.findOne(
    {'email': data.email},
    callback
)

```

# License

MIT
