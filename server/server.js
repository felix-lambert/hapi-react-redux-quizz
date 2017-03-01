'use strict'
/*
  Node.js® is a JavaScript runtime built on 
  Chrome's V8 JavaScript engine. Node.js uses an event-driven, 
  non-blocking I/O model that makes it lightweight and efficient. 
 */

// Transpile ES2015 + JSX with Babel
require('babel-register')({
  presets: ['react', 'es2015']
});
require("babel-polyfill")

// Setup HAPI server with Glue
const HapiGlueComposer = require('./config')


// Run Glue scripts and start server in final callback
HapiGlueComposer((err, server) => {

  if (err) {
    throw err;
  }
  /*
    Server.start takes a callback function, letting us know that the 
    server has been started
   */

  server.start(() => {
    console.log('Started server on port ' + server.info.port);
  });
});