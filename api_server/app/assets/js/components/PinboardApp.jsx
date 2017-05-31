import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Pinboard from './Pinboard.jsx'
import axios from 'axios';
import ActionCable from 'actioncable';

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
    });
  }

  componentDidMount() {
    this.reviveRoomData();
    this.setSubscription();
  }

  componentWillUnmount() {
    if(!this.cable) { return; }
    this.cable.disconnect();
  }

  setSubscription() {
    console.log('setting subscription ', ActionCable);
    this.cable = ActionCable.createConsumer();
    this.cable.subscriptions.create("PostChannel", {
      connected: () => {
        console.log('connected')
      },
      disconnected: (e) => {
        console.log('disconnected', e)
      },
      received: () => {
        this.reviveRoomData();
      }
    });
  }


  render() {
    return (
      <div>
        <Navbar currentUser={this.props.userData.data.user} />
        <Pinboard
          user={this.props.userData.data.user}
          room={this.state.roomAxiosData}
          posts={this.state.roomAxiosData.posts}
          refreshRoom={this.reviveRoomData}
        />
      </div>
    );
  }
}
