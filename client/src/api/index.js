import axios from 'axios'

export const addAnswer = function(answer) {
  return axios.post('http://localhost:3001/quizz', answer)
  .then(function(response) {
    return response.data;
  })
  .then(function(responseJson) {
    return responseJson; 
  }).catch((error) => { 
    console.error(error); 
  });
}

export const fetchQuizz = function() {
  return fetch('http://localhost:3001/quizz', {
    method: 'GET'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(responseJson) {
    return responseJson; 
  }).catch((error) => { 
    console.error(error); 
  });
}
