'use strict';

module.exports = {
  server: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secret: 'mySecret'
  },
  db: {
    uri: 'mongodb://localhost/ecommerce_project'
  }
};
