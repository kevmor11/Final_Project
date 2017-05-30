import React, {Component} from 'react';
import NavbarLeft from './NavbarLeft.jsx';
import UserLogoutButton from './UserLogoutButton.jsx';
import axios from 'axios';
import Logo from './Logo.jsx';

export default
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.currentUser
    }
  }


  render() {

    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <Logo />
            <NavbarLeft user={ this.state.user }/>
            <div className="nav-right nav-menu">
              <UserLogoutButton user={this.state.user}/>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


