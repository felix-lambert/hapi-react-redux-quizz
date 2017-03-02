import * as api from '../api';

const receiveQuizz = function(response) {
  return {
    type: 'RECEIVE_QUIZZ',
    response
  }
}

export const requestQuizz = function() {
  console.log('/////////////////////////////////////////////////////');
  console.log('requestQuizz');
  return {
    type: 'REQUEST_QUIZZ'
  }
}

export const fetchQuizz = () =>
  api.fetchQuizz().then(response =>
    receiveQuizz(response)
  );

export const addAnswer = (answer) => 
  api.addAnswer(answer).then(response =>
    receiveQuizz(response)
  );


