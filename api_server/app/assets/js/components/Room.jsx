import React, { Component } from 'react';
import axios from 'axios';

export default
class Rooms extends Component {

  redirectionTime = () => {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  onDeleteRoom = () => {
    this.props.deleteRoom(this.props.roomID, this.props.roomName);

  }

  render() {
    return (
      <tr>
        <th className="room-list">{this.props.roomNumber}</th>
        <td>
          <p className="field">
            <a><i className="fa fa-trash-o" onClick={this.onDeleteRoom}></i></a>
            <a onClick={this.redirectionTime}>
              {this.props.roomName}
            </a>
          </p>
        </td> 
      </tr>
    );
  }
}
