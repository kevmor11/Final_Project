import React, { Component } from 'react';

export default
class Rooms extends Component {

  // constructor(props) {
  //   super(props); // super calls `constructor` in React.Component
  //   this.state = {
  //     room_users: 1,
  //     reciever: "",
  //     invite_accepted: false
  //   }
  // }

  // handleFormChange(event) {
  //   this.setState({
  //     receiver: event.target.value
  //   });
  // }

  // submitForm(event) {
  //   axios.post('/api/invites', {
  //     receiver: this.state.receiver,
  //   }).then(this.close.bind(this));
  //   this.setState({
  //     room_users: 2
  //   })
  // }

  render() {

    return (
      <div>
        <tr>
          <th>1</th>
          <td><a href="" title="this room blah blah blah">{this.props.roomName}</a></td>
        </tr>
        {/*{ if (this.state.room_users === 1) {
            return (
              <div className="user-invite">
                <div className="field">
                  <label htmlFor="receiver" className="label">Invite a User to Join Your Room</label>
                  <p className="control">
                    <input className="input input-description" type="text" value={ this.state.receiver } name="receiver" id="invite_receiver" onChange={ this.handleFormChange } />
                  </p>
                </div>
                <p className="control">
                  <button type="submit" className="button is-primary" onClick={ this.submitForm }>Submit</button>
                </p>
              </div>
            )
        }}
        { if (this.state.invited_accepted === false) {
          return (
            <Notification sender={this.state.sender} receiver={this.state.receiver} />
          )
        }}*/}
      </div>
    );
  }
}
