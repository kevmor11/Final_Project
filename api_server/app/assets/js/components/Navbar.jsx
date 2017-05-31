import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft.jsx';
import UserLogoutButton from './UserLogoutButton.jsx';
import Logo from './Logo.jsx';

export default
class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <NavbarLeft user={ this.props.currentUser} />
            <Logo />
            <div className="nav-right nav-menu">
              <UserLogoutButton user={this.props.currentUser} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
