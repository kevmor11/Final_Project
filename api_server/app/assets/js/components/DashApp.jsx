import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
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
      user: null,
      reciever: "",
      room_users: 1,
      current_room: null;
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        console.log(res.data.user);
        console.log(res.data.user.rooms[0].name);
        const user = res.data.user;
        this.setState({ user });
      });

    axios.get(`http://localhost:3000/api/userrooms/1.json`)
      .then(res => {
        console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  handleInviteFormChange(event) {
    this.setState({
      receiver: event.target.value
    });
  }

  submitInviteForm(event) {
    axios.post('/api/userrooms', {
      receiver: this.state.receiver,
    }).then(this.close.bind(this));
    this.setState({
      room_users: 2
    })
  }

  render() {
    let userProfile;
    if(!this.state.user){
      const userAvatarURL = "http://www.clipartbest.com/cliparts/ncB/RK7/ncBRK7qei.png";
      const firstName ="Nawar";
      const userProfile = <UserProfile avatarURL={userAvatarURL} name={firstName}/>
      console.log("hi", userProfile);
    }
      // console.log(userProfile);

    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              {userProfile}
            </div>
          </div>
          <Rooms/>
        </div>

        { this.state.room_users === 1 &&
          <div className="user-invite">
            <div className="field">
              <label htmlFor="receiver" className="label">Invite Someone to Join Your Room</label>
              <p className="control">
                <input className="input" type="text" value={ this.state.receiver } name="receiver" id="invite_receiver" onChange={ this.handleInviteFormChange } />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary" onClick={ this.submitInviteForm }>Submit</button>
            </p>
          </div>
        }

      </div>
    );
  }
}
