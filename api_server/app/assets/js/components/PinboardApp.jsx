import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';
import Pinboard from './Pinboard.jsx'
import PropTypes from 'prop-types';
import axios from 'axios';

export default
class PinboardApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: props.userData.data.user,
      roomName: "",
      roomID: 0,
      roomAxiosData:""
    };
  }

  componentWillMount() {
    var location = window.location['pathname'].split('/')[2];
    var name = "";
    var ID = "";
    axios.get(`/rooms/${location}.json`).then((res) => {
      console.log("RESPOSNSE", res.data.room)
      name = res.data.room.name;
      ID = res.data.room.id;
      this.setState({
        roomName: name,
        roomID: ID,
        roomAxiosData: res.data.room
      })
    });
  }


  render() {
    return (
      <div>
        <Navbar currentUser={this.state.user} />
        <Pinboard  userData={this.state.user} roomName={this.state.roomName} roomID={this.state.roomID} roomAxiosData={this.state.roomAxiosData} />
      </div>
    );
  }
}
