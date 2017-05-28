import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import UserProfile from './UserProfile.jsx';
import Notifications from './Notifications.jsx';
import Rooms from './Rooms.jsx';
import axios from 'axios';

export default
class DashApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: null,
      receiver: "",
      userRoomsData: "",
      roomNamesArray:""
    }
  }

  componentDidMount() {
    let roomsFromParent; 
    this.props.userData.data.user.rooms
    roomsFromParent = this.props.userData.data.user.rooms.map((room) => {
      return room.name
    });

    this.setState({
      user: this.props.userData.data.user,
      userRoomsData: this.props.userData.data.user.rooms,
      roomNamesArray:roomsFromParent
    });
  }


  render() {
 
    let userProfile;
    let rooms = [];
    if(!this.state.user){
      const userAvatarURL = "http://www.clipartbest.com/cliparts/ncB/RK7/ncBRK7qei.png";
      const firstName = "this.state.user['first_name'];"
      const userProfile = <UserProfile avatarURL={userAvatarURL} name={firstName}/>

    } else {
      
      rooms = this.state.user.rooms;
    }
    console.log("DashApp props at render ",this.props.userData.data.user);
    
    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <Notifications />
              {userProfile}
            </div>
          </div>
          <Rooms  rooms={this.props.userData.data.user.rooms}/>

        </div>

 

      </div>
    );
  }
}