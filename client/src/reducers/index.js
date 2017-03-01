/*
  Redux is a predictable state container for JavaScript apps
  The whole state of your app is stored in an object tree 
  inside a single store
 */
import { combineReducers } from 'redux';
import quizz, * as fromQuizz from './quizz';

/*
  As your app grows, instead of adding stores, 
  you split the root reducer into smaller reducers 
  independently operating on the different parts 
  of the state tree. This is exactly like how there 
  is just one root component in a React app, but it 
  is composed out of many small components
 */
const quizzApp = combineReducers({
  quizz,
});

export default quizzApp;

export const getQuizz = (state, filter) =>
  fromQuizz.getQuizz(state.quizz, filter);
