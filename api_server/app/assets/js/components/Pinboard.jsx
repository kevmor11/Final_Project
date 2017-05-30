import React, {Component} from 'react';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'
import axios from 'axios';

export default
class Pinboard extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      openModal: '',
      user: props.userData,
      receiver: "",
      room_users: 1,
      invited_id: "",
      roomID: ""
    };
  }

  componentDidMount() {
    var roomUsers = 0;
    axios.get('/api/userrooms')
    .then(res => {
      const userrooms = res.data.userrooms;
      userrooms.forEach((item, i) => {
        if (item.room_id === this.props.roomID) {
          roomUsers += 1
        }
        this.setState({
          room_users: roomUsers,
          roomID: this.props.roomID
        })
      })
    });
  }

  render() {
    return (
    <div>
      <div className="tile is-ancestor mainboard">
        <PinboardSidebar currentRoom={this.state.roomID} room_users={this.state.room_users} invited_id={this.state.invited_id} roomID={this.props.roomID}/>
        <PinboardContainer updatePinboardApp={this.props.updatePinboardApp} 
                            openModal={this.state.openModal} 
                            userData={this.state} roomID={this.state.roomID} 
                            roomName={this.props.roomName}
                            roomID={this.state.roomID}
                            roomAxiosData={this.props.roomAxiosData}
                            posts={this.props.posts}/>
        </div>
      </div>
    )
  }
}