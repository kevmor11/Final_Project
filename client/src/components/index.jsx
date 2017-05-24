// require("../styles/home.css");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import DashApp from './DashApp.jsx';

const pages = {
  'react-dashboard': DashApp,
  'react-root': App
};

Object.entries(pages).forEach(([id, Component]) => {
  const root = document.getElementById(id);
  if(!root) { return; }
  console.log('Rendering into ', id);
  ReactDOM.render(<Component/>, root);
});

// {
//   const root = document.getElementById('react-dashboard');

//   if(root){
//     ReactDOM.render(<DashApp />, root);
//   }
// }

// {
//   const root = document.getElementById('react-root');

//   if(root) {
//     ReactDOM.render(<App />, root);
//   }
// }