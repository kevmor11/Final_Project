import React, { Component } from 'react';
import axios from 'axios';
import http from 'http';
import Notification from './Notification.jsx';

export default
class Notifications extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <div className="notification notification-center">
          <p>Notification</p>
        </div>
        <Notification />
      </div>
    );
  }
}
