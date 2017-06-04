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
          <img className="profile-avatar" alt="" src="https://orig08.deviantart.net/b83d/f/2013/272/7/9/happy_puppy_by_laki10-d6oi4nt.png" />
          <div className="profile-content">
            <table className="profile-content table is-narrow">
              <tbody>
                <tr>
                  <th><abbr title="name"></abbr>Name:</th>
                  <td>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</td>
                </tr>
                <tr>
                  <th><abbr title="email"></abbr>Email:</th>
                  <td>{this.props.currentUser.email}</td>
                </tr>
                <tr>
                  <th><abbr title="gender"></abbr>Gender:</th>
                  <td>{this.props.currentUser.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
