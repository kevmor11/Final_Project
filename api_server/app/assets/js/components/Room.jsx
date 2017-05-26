import React, { Component } from 'react';

export default
class Rooms extends Component {
  render() {

    return (
      <tr>
        <th>1</th>
        <td><a href="" title="this room blah blah blah">{this.props.roomName}</a></td>
      </tr>
    );
  }
}
