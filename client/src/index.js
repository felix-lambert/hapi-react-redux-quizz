/* 
  React well understood the fact that the DOM is slow, and so needs to limit the interaction
  with it. It uses a virtual DOM. A Virtual DOM is a representation of the DOM in JavaScript. 
  Instead of generating the DOM itself as with a templating language, ie instead of dialoging 
  with the browser APIs to build the DOM, we only generate a tree of JavaScript objects in 
  memory.
*/
import React from 'react';

/*
  The react-dom package provides DOM-specific methods that can 
  be used at the top level of your app and as an escape hatch 
  to get outside of the React model if you need to
 */
import { render } from 'react-dom';
import Root from './components/Root';

/* 
  With our knowledge so far, the only way to update the UI 
  is to create a new element, and pass it to ReactDOM.render()
  In practice, most React apps only call ReactDOM.render() once
 */
render(
  <Root />,
  /*
    It renders it into the div I created inside the HTML. 
    It's div with the id called root
   */
  document.getElementById('root')
);
