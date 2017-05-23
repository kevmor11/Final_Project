import React, { Component } from 'react';
import Rooms from './Rooms.jsx';

export default
class Dashboard extends Component {
  render() {
    return (
      <div className="tile is-ancestor logged">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <div className="notification notification-center">
                <p>Notification</p>
              </div>

              <div className="notification">
                <img className="notification-avatar" alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                <button className="delete" />
                <p className="notification-content">Nawar invited you to join his room.</p>
                <button className="btn btn-primary">Join</button>
              </div>
              <div className="notification">
                <img className="notification-avatar" alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                <button className="delete" />
                <p className="notification-content">Shawn invited you to join his room.</p>
                <button className="btn btn-primary">Join</button>
              </div>
              <div className="notification">
                <img className="notification-avatar" alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                <button className="delete" />
                <p className="notification-content">Kevin invited you to join his room.</p>
                <button className="btn btn-primary">Join</button>
              </div>
              <div className="notification">
                <img className="notification-avatar" alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                <button className="delete" />
                <p className="notification-content">Jinny invited you to join her room.</p>
                <button className="btn btn-primary">Join</button>
              </div>
              <div className="notification">
                <img className="notification-avatar" alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                <button className="delete" />
                <p className="notification-content">5 unread messages from Shawn.</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
            <div className="tile is-parent is-2">
              <article className="tile is-child box dashboard profilebox">
                <p className="title">User Dashboard</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img alt="" src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png" />
                </figure>
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                  </span>
                  <span>Profile Setting</span>
                </a>

              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent is-2 rooms">
          <article className="tile is-child box">
            <div className="content">

              <p className="subtitle">Your Rooms</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th>Room Name <i className="glyphicon-plus" /></th>
                  </tr>
                </thead>
                <tfoot>
                </tfoot>
                <tbody>
                  <Rooms />
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
