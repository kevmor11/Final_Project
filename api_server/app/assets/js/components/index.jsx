import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App.jsx';
import DashApp from './DashApp.jsx';
import PinboardApp from './PinboardApp.jsx';

const pages = {
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

function index() {
  ReactDOM.render(
    <App />, document.getElementById('react-root'));
}

axios('/users/me').then(run).catch(index);