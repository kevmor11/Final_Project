import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PropTypes from 'prop-types';
import Notification from './Notification.jsx';
import UserProfile from './UserProfile.jsx';
import Notifications from './Notifications.jsx';
import Rooms from './Rooms.jsx';
import axios from 'axios';

export default
class DashApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: props.userData.data.user,
    }
  }

  componentDidMount() {

    console.log("Did mount", "and props now are", this.props.userData.data.user);
    this.setState({
      user: this.props.userData.data.user
    });
  }

  render() {
    let rooms = [];
      rooms = this.state.user.rooms;

    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <Notifications />
            </div>
          </div>
          <Rooms  rooms={this.state.user.rooms}/>
        </div>
      </div>
    );
  }
}