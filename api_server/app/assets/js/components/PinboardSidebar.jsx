import React, {Component} from 'react';
import axios from 'axios'

export default
class PinboardSidebar extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      roomName: "",
      roomUsers: [],
      invited_id: "",
      receiver: "",
      room_users: 1
    }
  }

  // Get Room Name and Room users
  componentDidMount() {
    var room_name = "";
    var room_users = [];
    var room_users_firstNames = [];
    axios.get(`/api/rooms.json`)
      .then(res => {
        var rooms = res.data.rooms;
        rooms.forEach((item, i) => {
          if (this.props.currentRoom === item.id) {
            room_name = item.name;
            room_users = item.users;
          }
        })
        room_users.forEach((item, i) => {
          room_users_firstNames.push(item.first_name);
        })
        this.setState({
          roomName: room_name,
          roomUsers: room_users_firstNames
        })
      // console.log("NAME STATE", this.state);
    });
  }

  addUserToRoom = () => {
    console.log('addusertoroom', this.state.invited_id);
    console.log('addusertoroom roomid', this.props.roomID);
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
        if (user.email === this.state.receiver) {
          console.log("INSIDE", user.id);
          userID = user.id;
          this.setState({
            invited_id: userID
          })
          console.log('setstate invited_id', this.state.invited_id);
          this.addUserToRoom();
        }
      })
    });
  }

  render() {
    // console.log("STATE", this.state);
    return(
      <div>
        <div className="tile is-parent is-2 rooms">
          <article className="tile is-child box">
            <div className="content">
            { this.props.room_users === 1 &&
            <div className="user-invite">
              <div className="field">
                <label htmlFor="receiver" className="label">Invite Someone to Join Your Room</label>
                <p className="control">
                  <input className="input" type="text" name="receiver" id="invite_receiver" onChange={ this.handleInviteFormChange } />
                </p>
              </div>
                <p className="control">
                  <button type="submit" className="pinboard button is-primary" onClick={ this.submitInviteForm }>Submit</button>
                </p>
              </div>
            }
              <p className="subtitle">{this.state.roomName}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>

                  { this.state.roomUsers.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item}</td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
