import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route} from 'react-router';
import App from './App.jsx';
import DashApp from './DashApp.jsx';
import PinboardApp from './PinboardApp.jsx';
import HangoutApp from './HangoutApp.jsx';

const pages = {
  'react-dashboard': DashApp,
  'react-root': App,
  'react-pinboard': PinboardApp,
  'react-hangout': HangoutApp
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