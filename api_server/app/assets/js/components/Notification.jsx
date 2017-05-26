import React, { Component } from 'react';
import axios from 'axios';
import http from 'http';

export default
class Notification extends Component {

  render() {
    return (
      <div className="notification">
        <img className="notification-avatar" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png"/>
        <button className="delete"></button>
        <p className="notification-content">Nawar invited you to join his room.</p>
        <button className="btn btn-primary">Join</button>
      </div>
    )
  }
}  