import React, {Component} from 'react';
import axios from 'axios'

export default
class PinboardSidebar extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      // roomName: props.room.name,
      // roomUsers: [],
      // invited_id: "",
      receiver: "",
      room_users: props.room_users  // todo: abolish
    }
  }



  addUserToRoom = (invited_id) => {
    console.log('addusertoroom', invited_id, "to", this.props.room.id);
    axios.post('/api/userrooms', {
      user_id: invited_id,
      room_id: this.props.room.id,
    })
    .then((d) => {console.log("add-user success", d)})
    .catch((e) => {console.log("add-user explosion", e)})
    this.props.refreshRoom();
    // this.setState({
    //   room_users: 2
    // })
  }

  handleInviteFormChange = (event) => {
    this.setState({
      receiver: event.target.value
    });
  }

  submitInviteForm = () => {
    console.log("submitting invite form for", this.state.receiver);
    axios.get('/api/users')
    .then(res => {
      const users = res.data.users;
      users.forEach((user, i) => {
        if (user.email === this.state.receiver) {
          this.addUserToRoom(user.id);
        }
      })
    });
  }

  render() {
    var users = this.props.room.users || [];
    return(
      <div>
        <div className="tile is-parent is-2 rooms">
          <article className="tile is-child box">
            <div className="content">
            { users.length === 1 &&
            <div className="user-invite">
              <div className="field">
                <label htmlFor="receiver" className="label">Invite Someone to Join Your Room</label>
                <p className="control">
                  <input className="input" type="text" name="receiver" id="invite_receiver" onChange={ this.handleInviteFormChange } value={this.state.receiver} />
                </p>
              </div>
                <p className="control">
                  <button type="submit" className="pinboard button is-primary" onClick={ this.submitInviteForm }>Submit</button>
                </p>
              </div>
            }
              <p className="subtitle">{this.props.room.name}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.first_name}</td>
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
