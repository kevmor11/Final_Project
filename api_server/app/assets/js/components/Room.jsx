import React, { Component } from 'react';

export default
class Rooms extends Component {

  redirectionTime = () => {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  render() {
    return (
      <tr>
        <th>{this.props.roomNumber}</th>
        <td>
          <p className="field">
            <a className="button is-danger is-outlined" onClick={this.redirectionTime}>
              {this.props.roomName}
            </a>
          </p>
        </td>
      </tr>
    );
  }
}
