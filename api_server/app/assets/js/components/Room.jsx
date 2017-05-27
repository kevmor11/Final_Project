import React, { Component } from 'react';

export default
class Rooms extends Component {

  redirectionTime() {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  render() {
    return (
      <tr>
        <th>{this.props.roomNumber}</th>

        <td>
          <button onClick={this.redirectionTime.bind(this)}>{this.props.roomName}</button>
          {/*<a href="" title="this room blah blah blah">{this.props.roomName}</a>*/}
        </td>
      </tr>
    );
  }
}
