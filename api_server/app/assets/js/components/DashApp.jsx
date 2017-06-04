import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile.jsx';
import Profile from './Profile.jsx';
import Rooms from './Rooms.jsx';

export default
class DashApp extends Component {
  render() {
    let rooms = [];
    rooms = this.props.user.rooms;
    return (
      <div className="dash-container">
        <Navbar currentUser={this.props.user} />
        <div className="tile is-ancestor logged">
          <Profile currentUser={this.props.user}/>
          <Rooms rooms={rooms} />
        </div>
      </div>
    );
  }
}