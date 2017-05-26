import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PropTypes from 'prop-types';
import Notification from './Notification.jsx';
import Rooms from './Rooms.jsx';

export default
class DashApp extends Component {
  static PropTypes = {
    foo: PropTypes.string
  }

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.foo = "bar";
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor logged">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <div className="notification notification-center">
                  <p>Notification</p>
                </div>
                <Notification />
              </div>
              <div className="tile is-parent is-2">
                <article className="tile is-child box dashboard profilebox">
                  <p className="title">User Dashboard</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img src="http://www.stottpilates.com/studio/images/instructors/person-placeholder.png"/>
                  </figure>
                  <a className="button is-primary">
                    <span className="icon">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                      </span>
                    <span>Profile Setting</span>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <Rooms/>
        </div>
      </div>
    );
  }
}

// className ExtendedApp extends App {
//   render() {
//     const inner = super.render(); // calls render in <App />
//     return <div id="wrapped">{inner}</div>;
//   }
// }