import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import quizzApp from './reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  /*
  	Create a Redux store holding the state of your app.
  	Its API is { subscribe, dispatch, getState }.
  	This store binds together the three principles of Redux. 
  	It holds the current application's state object. It 
  	lets you dispatch actions. When you create it, you need 
  	to specify the reducer that tells how state is updated 
  	with actions
 	*/
  return createStore(
    quizzApp,
    applyMiddleware(...middlewares)
  );

  /*
	  The createStore function from redux is:
	  const createStore = (reducer) => {
	    let state;
	    let listeners = [];
	    
	    const getState = () => state;
	    
	    const dispatch = (action) => {
	      state = reducer(state, action);
	      listeners.forEach(listener => listener());
	    };
	    
	    const subscribe = (listener) => {
	      listeners.push(listener);
	      return () => {
	        listeners = listeners.filter(l => l !== listener);
	      };
	    };
	    
	    dispatch({});
	    
	    return { getState, dispatch, subscribe };
	  };

	*/
};

export default configureStore;
