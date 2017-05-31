import React, {Component} from 'react';
import axios from 'axios'

export default
class PinboardSidebar extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
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

  // TODO Change this so we are not requesting the entire user database, but instead we are sending the email to the database to be checked on server side
  submitInviteForm = () => {
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
