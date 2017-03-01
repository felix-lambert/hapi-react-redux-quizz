import { combineReducers } from 'redux';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 * you write a special function called a reducer to decide how every 
 * action transforms the entire application's state
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state };
      action.response.forEach(quizz => {
        nextState[quizz.id] = quizz;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(quizz => quizz.id);
    default:
      return state;
  }
};

const quizz = combineReducers({
  byId,
  allIds
});

export default quizz;

export const getQuizz = (state) => {
  const ids = state.allIds;
  return ids.map(id => state.byId[id]);
};
