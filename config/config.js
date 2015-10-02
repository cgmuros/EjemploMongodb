var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ejemplomongodb'
    },
    //port: 3000,
    port: 63833,
    //db: 'mongodb://localhost/nodejs'
    db: 'mongodb://cgmuros:alfa14@ds063833.mongolab.com/nodejs'
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
    //port: 3000,
    port: 63833,
    //db: 'mongodb://localhost/nodejs'
    db: 'mongodb://cgmuros:alfa14@ds063833.mongolab.com:63833/nodejs'
    
  }
};

module.exports = config[env];
