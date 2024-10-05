import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './movieAssignement/App';
// import App from './conditionalRendering/App'
// import App2 from './conditionalRendering/App2';
// import App from './renderingAndChild/App'
// import App from "./classBased/App"
import App from './lifecycle_functional/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


/* 
  const root = document.getElementById('root');
  const myDiv = document.createElement('div');
  const h1Elem = document.createElement('h1');
  h1Elem.textContent = 'This is my heading'
  myDiv.append(h1Elem);
  root.append(myDiv)

*/