import React, {Component} from 'react';
import Logo from './Logo.jsx';
export default

class NavbarLeft extends Component {
  render() {
    return (
      <div className="nav-left">
        <div className="nav-item">
          <Logo />
        </div>
        <a className="nav-item is-tab is-hidden-mobile is-active">
          <span className="icon">
            <i className="fa fa-home"></i>
          </span>
        </a>
        <a className="nav-item is-tab is-hidden-mobile ">
          <span className="icon">
            <i className="fa fa-envelope-open" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    )
  }
}
