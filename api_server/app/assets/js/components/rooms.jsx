import React, { Component } from 'react';
import Room from './Room.jsx';

export default
class Rooms extends Component {
  render() {
    return (
      <div className="tile is-parent is-2 rooms">
        <article className="tile is-child box">
          <div className="content">

            <p className="subtitle">Your Rooms</p>
            <table className="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Room Name</th>
                </tr>
              </thead>
              <tbody>
                <Room />
              </tbody>
            </table>
          </div>
        </article>
      </div>
    );
  }
}
