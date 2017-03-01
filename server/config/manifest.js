'use strict';

const manifest = {
  connections: [{
    port: 3001,
    labels: ['web'],
    routes: { cors: true }
  }],
  registrations: [
    {
      /*
      Static file and directory handlers
      Once you registered the inert plugin 
      to your hapi server instance, it adds 
      new handler methods to serve files and 
      directories and also decorates the reply 
      object with a file method to serve file resources.
     */
      plugin: 'inert'
    },
    {
      plugin: '../src/index'
    }
  ]
};

exports.manifest = manifest;