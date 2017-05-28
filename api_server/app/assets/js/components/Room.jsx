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
          <p className="field">
            <a className="button is-danger is-outlined" onClick={this.redirectionTime.bind(this)}>{this.props.roomName}</a>
          {/*<a href="" title="this room blah blah blah">{this.props.roomName}</a>*/}
          </p>
        </td>
      </tr>
    );
  }
}
