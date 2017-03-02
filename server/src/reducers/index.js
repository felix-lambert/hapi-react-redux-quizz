import quizz from '../db/iFrameLinks.json'
import shuffle from '../helpers/shuffle'

export function reducer(tally, answer) {
  if (!tally[answer]) {
    tally[answer] = 1;
  } else {
    tally[answer]++;
  }
  return tally
}

export function buildQuizz(data) {
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
  return quizzToSend
}