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

  componentDidMount() {
    
    axios.get(`users/me`)
      .then(res => {
        alert(res);
      });
  }



  render() {
    let userProfile;
    if(!this.state.user){
      const userAvatarURL = "http://www.clipartbest.com/cliparts/ncB/RK7/ncBRK7qei.png";
      const firstName ="Nawar";
      const userProfile = <UserProfile avatarURL={userAvatarURL} name={firstName}/>
      console.log("hi", userProfile);
    }
      console.log(userProfile);
    
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
        </div>
      </div>
    );
  }
}

// className ExtendedApp extends App {
//   render() {
//     const inner = super.render(); // calls render in <App />
//     return <div id="wrapped">{inner}</div>;
//   }
// }