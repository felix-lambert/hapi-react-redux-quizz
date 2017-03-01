import React, { Component } from 'react';
import './App.css';
import image from './img/LogoAikido.jpg'
import { Link } from 'react-router'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <img role="presentation" src={image}/>
          <br/>
          {/*
            Using <Link> though is necessary for React Router to 
            do some of its routing magic*/}
          <Link className="btn btn-success btn-lg" to={`/quizz`}>Start quizz</Link>
        </p>
      </div>
    );
  }
}

export default App;
