'use strict';

import readFile from './helpers/readFile'
import fs from 'fs'

exports.register = (server, options, next) => {

  server.route({
    method: 'POST',
    path: '/quizz',
    handler: (request, reply) => {
      if (fs.existsSync('./src/db/answers.txt')) {
        // Do something
        fs.appendFile('./src/db/answers.txt', '\n' + request.payload.answer, function (err) {
          if (err) 
            return console.log(err);
            console.log('successfully appended');
        });
      } else {
        fs.writeFile('./src/db/answers.txt', request.payload.answer, function (err) {

          if (err) throw err;
          
          console.log('It\'s saved! in same location.');
        });
      }
      readFile(function(res) {
        if (res[6].result) {
          fs.unlink('./src/db/answers.txt', (err) => {
            if (err) throw err;
          });
        }
        return reply(res)
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/quizz',
    handler: (request, reply) => {
      readFile(function(res) {
        return reply(res)
      })
    }
  });
  
  next();
};

exports.register.attributes = {
  name: 'web'
};
