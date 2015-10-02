var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ejemplomongodb'
    },
    port: 3000,
    db: 'mongodb://localhost/nodejs'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ejemplomongodb'
    },
    port: 3000,
    db: 'mongodb://localhost/ejemplomongodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ejemplomongodb'
    },
    port: 3000,
    db: 'mongodb://localhost/ejemplomongodb-production'
  }
};

module.exports = config[env];
