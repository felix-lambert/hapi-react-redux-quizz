import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from '../configureStore';
import Home from '../Home';
import App from './App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    	<Route path="/quizz" component={App}/>
    </Router>
  </Provider>
);

export default Root;
