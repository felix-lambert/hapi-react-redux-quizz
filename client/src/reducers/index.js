import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_QUIZZ': // eslint-disable-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_QUIZZ':
      return action.response.map(quizz => quizz.id);
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_QUIZZ':
      return true;
    case 'RECEIVE_QUIZZ':
      return false;
    default:
      return state;
  }
};

/*
  As your app grows, instead of adding stores, 
  you split the root reducer into smaller reducers 
  independently operating on the different parts 
  of the state tree. This is exactly like how there 
  is just one root component in a React app, but it 
  is composed out of many small components
 */
const quizz = combineReducers({
  byId,
  allIds,
  isFetching,
});

export default quizz;

const GetQuizz = function(state) {
  const ids = state.allIds;
  return ids.map(id => state.byId[id]);
}

const IsFetching = state => isFetching;

const GetIsFetching = (state) => IsFetching(state.allIds);

export const getQuizz = (state) => GetQuizz(state);

export const getIsFetching = (state) => GetIsFetching(state);

  