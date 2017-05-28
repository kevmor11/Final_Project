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
      // TO DO make an axios call to determine current room rather than hard coding it
      current_room: 6,
      invited_id: ""
    };
  }

  componentDidMount() {

    console.log("Did mount", "and props now are", this.props.userData);
    this.setState({
      user: this.props.userData
    });

    // PSEUDO CREATE USERROOM SO THAT WE ARE ABLE TO GET THE ROOM FOR INVITING USERS, DELETE ONCE NAWAR AND JINNY FINISH THE REAL VERSION OF THIS
    // axios.post('/api/userrooms', {
    //   user_id: 6,
    //   room_id: 6,
    // });
    // this.setState({
    //   current_room: 2
    // })

    // // set the current room so that we know which room to render???
    // axios.get(`/api/userrooms/6.json`)
    // .then(res => {
    //   console.log("Room Get", res);
    //   const current_room = res.data.user;
    //   this.setState({ current_room: current_room });
    // });

    var roomUsers = 0;
    axios.get('/api/userrooms')
    .then(res => {
      // console.log("USERROOM DATA", res.data.userrooms)
      const userrooms = res.data.userrooms;
      userrooms.forEach((item, i) => {
        // console.log("INSIDE", item);
        if (item.room_id === this.state.current_room) {
          roomUsers += 1
        }
        this.setState({
          room_users: roomUsers
        })
        console.log("room_users STATE", this.state.room_users);
      })
    });
  }

  addUserToRoom = () => {
    console.log("INSIDE", this.state.invited_id);
    axios.post('/api/userrooms', {
      user_id: this.state.invited_id,
      // TO DO Change to this.state.current_room instead of hardcoding *********************
      room_id: 6,
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

  render(){
    return (
    <div>
      <div className="tile is-ancestor mainboard">
        <PinboardSidebar />
        <PinboardContainer openModal={this.state.openModal} userData={this.state}/>
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