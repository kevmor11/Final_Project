import React, { Component } from 'react';
import axios from 'axios';

export default
class Rooms extends Component {

  redirectionTime = () => {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  deleteRoom = () => {
    axios.delete(`/api/rooms/${this.props.roomID}`).then(console.log('roomdeleted!'))
  }

  render() {
    return (
      <tr>
        <th className="room-list">{this.props.roomNumber}</th>
        <td>
          <p className="field">
            <a><i className="fa fa-trash-o" onClick={this.deleteRoom}></i></a>
            <a onClick={this.redirectionTime}>
              {this.props.roomName}
            </a>
          </p>
        </td>
      </tr>
    );
  }
}
