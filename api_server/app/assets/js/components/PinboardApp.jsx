import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Pinboard from './Pinboard.jsx'
// import PropTypes from 'prop-types';
import axios from 'axios';

export default
class PinboardApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      roomAxiosData:"",
    };
  }

  reviveRoomData = () => {
    var location = window.location['pathname'].split('/')[2];
    axios.get(`/rooms/${location}.json`).then((res) => {
      this.setState({
        roomAxiosData: res.data.room,
      });
      console.log("room data in PBApp", this.state.roomAxiosData);
    });
  }

  componentDidMount() {
    this.reviveRoomData();
  }


  render() {
    return (
      <div>
        <Navbar currentUser={this.props.userData.data.user} />
        <Pinboard
          updatePinboardApp={this.reviveRoomData}
          user={this.props.userData.data.user}
          room={this.state.roomAxiosData}
          posts={this.state.roomAxiosData.posts}
          refreshRoom={this.reviveRoomData}
        />
      </div>
    );
  }
}
