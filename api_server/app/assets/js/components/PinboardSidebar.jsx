import React, {Component} from 'react';
import axios from 'axios';

export default
class PinboardSidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
    }
  }

  addUserToRoom = (invited_id) => {
    axios.post('/api/userrooms', {
      user_id: invited_id,
      room_id: this.props.room.id,
    })
    this.props.refreshRoom();
  }

  handleInviteFormChange = (event) => {
    this.setState({
      receiver: event.target.value
    });
  }

  submitInviteForm = () => {
    axios.get('/api/users')
    .then(res => {
      const users = res.data.users;
      users.forEach((user) => {
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
              <div className="user-invite">
                <div className="field">
                  <label htmlFor="receiver" className="label">Invite a Friend</label>
                  <p className="control">
                    <input className="input" type="text" name="receiver" id="invite_receiver" onChange={ this.handleInviteFormChange } value={this.state.receiver} />
                  </p>
                </div>
                <p className="control">
                  <button type="submit" className="pinboard button hover" onClick={ this.submitInviteForm }>Send Invite</button>
                </p>
              </div>
              <br />
              <h3 className="subtitle">{this.props.room.name}</h3>
              <h5>Members:</h5>
              <ul>
                {users.map((item) => {
                  return (
                    <li key={item.id}>{item.first_name}</li>
                  )
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
