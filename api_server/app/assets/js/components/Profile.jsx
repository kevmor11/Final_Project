import React, { Component } from 'react';
import axios from 'axios';
import http from 'http';

export default
class Profile extends Component {
  render() {
    return (
      <div className="tile is-parent profile">
        <div className="tile is-child profile-container box">
          <p className="profile-name">{this.props.currentUser.first_name} Profile</p>
          <img className="profile-avatar" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png"/>
          <div className="profile-content">
            <p>Name: {this.props.currentUser.frist_name} {this.props.currentUser.last_name}</p>
            <p>Email: {this.props.currentUser.email}</p>
            <p>Gender: {this.props.currentUser.gender}</p>
          </div>
        </div>
      </div>
    );
  }
}
