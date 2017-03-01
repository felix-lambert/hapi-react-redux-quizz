import random from 'node-random'
import fs from 'fs'
import quizz from '../db/iFrameLinks.json'
import shuffle from './shuffle'

export default function readFile(cb) {
  random.numbers({
    "number": 5,
    "minimum": 1,
    "maximum": 19
  }, function(error, data) {
    if (error) throw error;
    const quizzToSend = []
    let i = 0
    let response
    data.forEach(function(d) {
      if (i === 0) {
        response = quizz.find(o => o.id === d)
      }
      quizzToSend.push(quizz.find(o => o.id === d))
    });
    shuffle(quizzToSend)
    quizzToSend.push(response)
    if (fs.existsSync('./src/db/answers.txt')) {
      fs.readFile('./src/db/answers.txt', function (err, data) {
        if (err) {
          return console.log(err);
        }
        let lastData = data.toString().split("\n");
        if (lastData.length > 0) {
          if (lastData.length + 1 >= 20) {
            var trueCount = 0;
            var falseCount = 0;
            lastData.forEach(function (object) {
              object == 'true' ? trueCount++ : falseCount++;
            });

            quizzToSend.push({
              question: lastData.length + 1,
              result: trueCount
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
