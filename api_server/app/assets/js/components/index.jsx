import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App.jsx';
import DashApp from './DashApp.jsx';
import PinboardApp from './PinboardApp.jsx';

const pages = {
  'react-root': App,
  'react-dashboard': DashApp,
  'react-pinboard': PinboardApp,
};

function run(response) {
  Object.entries(pages).forEach(([id, Component]) => {
    const root = document.getElementById(id);
    if (!root) return;
    const user = (response instanceof Error) ? {} : response.data.user;
    ReactDOM.render(
      <Component user={user} />, root);
  });
}

axios('/users/me').then(run).catch(run);
