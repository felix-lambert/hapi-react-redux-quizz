import logo from '../img/logo.svg';
import React from 'react';

const Header = () => {

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to the Aikido quizz</h2>
    </div>
  );
};

export default Header;
