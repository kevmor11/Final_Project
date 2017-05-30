import React, { Component } from 'react';
import axios from 'axios';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class Pinboard extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      // openModal: '',
      user: props.userData,
      // receiver: "",
      // room_users: 1,
      // invited_id: "",
      // roomID: "",
    };
  }

  // componentDidMount() {
  //   // TODO, grab this data from elsewhere
  //   let roomUsers = 0;
  //   axios.get('/api/userrooms')
  //   .then(res => {
  //     const userrooms = res.data.userrooms;
  //     userrooms.forEach((item) => {
  //       if (item.room_id === this.props.roomID) {
  //         roomUsers += 1;
  //       }
  //       this.setState({
  //         room_users: roomUsers,
  //         roomID: this.props.roomID,
  //       });
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <div className="tile is-ancestor mainboard">
          <PinboardSidebar
            room={this.props.room}
            refreshRoom={this.props.refreshRoom}
          />
          <PinboardContainer
            updatePinboardApp={this.props.updatePinboardApp}
            userData={this.state}
            roomName={this.props.room.name}
            roomID={this.props.room.id}
            roomAxiosData={this.props.room}
            posts={this.props.posts}
          />
        </div>
      </div>
    );
  }
}
