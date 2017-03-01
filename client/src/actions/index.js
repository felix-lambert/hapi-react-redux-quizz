import * as api from '../api';

const receiveTodos = function(response) {
  return {
    type: 'RECEIVE_TODOS',
    response
  }
}

export const fetchTodos = () =>
  api.fetchTodos().then(response =>
    receiveTodos(response)
  );

export const addAnswer = (answer) => 
  api.addAnswer(answer).then(response =>
    receiveTodos(response)
  );

