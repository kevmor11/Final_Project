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
    // console.log("I hate you", window.location['pathname'].split('/')[2]);
    this.state = {
      openModal: '',
      roomName: "",
      roomID: 0
    };
  }

  componentWillMount() {
    var location = window.location['pathname'].split('/')[2];
    var name = "";
    var ID = "";
    axios.get(`/rooms/${location}.json`).then((res) => {
      // console.log('response', res);
      name = res.data.room.name;
      ID = res.data.room.id;
      this.setState({
        roomName: name,
        roomID: ID
      })
    });
  }

  // openModal(modalName) {
  //   // image, link, note
  //   this.setState(Object.assign({}, this.state, { openModal: modalName }));
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Pinboard openModal={this.state.openModal} userData={this.props.userData} roomName={this.state.roomName} roomID={this.state.roomID} />
      </div>
    );
  }
}

// class ExtendedApp extends App {
//   render() {
//     const inner = super.render(); // calls render in <App />
//     return <div id="wrapped">{inner}</div>;
//   }
// }