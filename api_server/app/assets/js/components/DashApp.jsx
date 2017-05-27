import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import UserProfile from './UserProfile.jsx';
import Notifications from './Notifications.jsx';

import Rooms from './Rooms.jsx';

export default
class DashApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: null
    }
  }
// ['data']['user']
  componentDidMount() {
    console.log("Did mount", "and props now are", this.props['userData']['data']['user']);
    
    this.setState({
      user: this.props['userData']['data']['user']
    });
   
  }

  


  render() {
    let userProfile;
    if(!this.state.user){
      const userAvatarURL = "http://www.clipartbest.com/cliparts/ncB/RK7/ncBRK7qei.png";
      const firstName = "this.state.user['first_name'];"
      const userProfile = <UserProfile avatarURL={userAvatarURL} name={firstName}/>
      console.log("State at render", this.state);
    }
      console.log("Prooooooops",this.props.userData['data']['user']);
    
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
          <Rooms/>
          <button> create Room</button>
        </div>
      </div>
    );
  }
}
