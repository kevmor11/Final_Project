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
      user: null,
      receiver: "",
      room_users: 1,
      invited_id: "",
      roomID: ""
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.userData
    });

    var roomUsers = 0;
    axios.get('/api/userrooms')
    .then(res => {
      // console.log("USERROOM DATA", res.data.userrooms)
      const userrooms = res.data.userrooms;
      userrooms.forEach((item, i) => {
        // console.log("INSIDE", item);
        if (item.room_id === this.props.roomID) {
          roomUsers += 1
        }
        this.setState({
          room_users: roomUsers,
          roomID: this.props.roomID
        })
        // console.log("room_users STATE", this.state.room_users);
      })
    });
  }

  addUserToRoom = () => {
    axios.post('/api/userrooms', {
      user_id: this.state.invited_id,
      room_id: this.props.roomID,
    });
    this.setState({
      room_users: 2
    })
  }

  handleInviteFormChange = (event) => {
    this.setState({
      receiver: event.target.value
    });
  }

  submitInviteForm = () => {
    var userID = "";
    axios.get('/api/users')
    .then(res => {
      const users = res.data.users;
      users.forEach((user, i) => {
        // console.log("INSIDE", user);
        if (user.email === this.state.receiver) {
          userID = user.id;
          this.setState({
            invited_id: userID
          })
          this.addUserToRoom();
        }
      })
    });
  }

  render() {
    return (
      <div>
        <div className="tile is-ancestor mainboard">
          <PinboardSidebar currentRoom={this.state.roomID} />
          <PinboardContainer roomID={this.state.roomID} />
          { this.state.room_users === 1 &&
            <div className="user-invite">
              <div className="field">
                <label htmlFor="receiver" className="label">Invite Someone to Join Your Room</label>
                <p className="control">
                  <input className="input" type="text" name="receiver" id="invite_receiver" onChange={ this.handleInviteFormChange } />
                </p>
              </div>
              <p className="control">
                <button type="submit" className="button is-primary" onClick={ this.submitInviteForm }>Submit</button>
              </p>
            </div>
          }
        </div>
      </div>
    )
  }
}