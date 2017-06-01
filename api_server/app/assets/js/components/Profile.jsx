import React, { Component } from 'react';
import axios from 'axios';
import http from 'http';

export default
class Profile extends Component {
  render() {
    return (
      <div className="tile is-parent profile">
        <div className="tile is-child profile-container box">
          <strong className="profile-name">{this.props.currentUser.first_name}'s Profile</strong>
          <img className="profile-avatar" alt="" src="https://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
          <div className="profile-content">
            <strong>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong>
            <br />
            <strong>Email: {this.props.currentUser.email}</strong>
            <br />
            <strong>Gender: {this.props.currentUser.gender}</strong>
          </div>
        </div>
      </div>
    );
  }
}
