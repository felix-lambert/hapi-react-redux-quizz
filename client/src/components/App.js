import React from 'react';
import Quizz from './Quizz';
import Header from './Header'
import { Link } from 'react-router'

/*
  This component is only going to have a render function and 
  is going to return a div. Inside the div, I'm going to place the Quizz component.
*/
const App = () => (
  <div>
		<Header />
		<div className="container">
			<br/>
			<Link className="btn btn-warning btn-lg" to={`/`}>Go back</Link>
	    <Quizz />
    </div>
  </div>
);

export default App;
