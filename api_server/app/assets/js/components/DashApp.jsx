import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PropTypes from 'prop-types';
// import Notification from './Notification.jsx';
import UserProfile from './UserProfile.jsx';
import Notifications from './Notifications.jsx';
import Rooms from './Rooms.jsx';

export default
class DashApp extends Component {
  render() {
    let rooms = [];
    rooms = this.props.user.rooms;

    return (
      <div>
        <Navbar currentUser={this.props.user} />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <Notifications />
            </div>
          </div>
          <Rooms rooms={rooms} />
        </div>
      </div>
    );
  }
}