'use strict'
import random from 'node-random'
import fs from 'fs'
import {reducer, buildQuizz} from '../reducers'

export default function readFile(cb) {
  random.numbers({
    "number": 5,
    "minimum": 1,
    "maximum": 19
  }, function(error, data) {
    if (error) throw error;
    const pipeline = [
      buildQuizz,
    ];
    const quizzToSend = pipeline.reduce(function(acc, fn) {
      return fn(acc);
    }, data);
    if (fs.existsSync('./src/db/answers.txt')) {
      fs.readFile('./src/db/answers.txt', function (err, data) {
        if (err) {
          return console.log(err);
        }
        let lastData = data.toString().split("\n");
        if (lastData.length > 0) {
          if (lastData.length + 1 >= 20) {
            
            const initialValue = {};
            const results = lastData.reduce(reducer, initialValue);

            quizzToSend.push({
              question: lastData.length + 1,
              result: results.true
            })
          } else {
            quizzToSend.push({question: lastData.length + 1})
          }
        } else {
          quizzToSend.push({question: 1})
        }
        return cb(quizzToSend)
      });

    } else {
      quizzToSend.push({question: 1})
      return cb(quizzToSend)
    }
  });
}
