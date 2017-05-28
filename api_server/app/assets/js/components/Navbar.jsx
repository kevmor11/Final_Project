import React, {Component} from 'react';
import NavbarLeft from './NavbarLeft.jsx'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <NavbarLeft />
            <span className="nav-toggle">
              <span>one</span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <a className="nav-item is-tab is-hidden-tablet is-active" href='https://www.google.com'>Home</a>
              <a className="nav-item is-tab is-hidden-tablet">Features</a>
              <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
              <a className="nav-item is-tab is-hidden-tablet">About</a>
              <a className="nav-item is-tab">
                <figure className="image is-16x16" style={{"marginRight": "8px"}}>
                  <img src="http://bulma.io/images/jgthms.png"/>
                </figure>
                Profile
              </a>
              <a className="nav-item is-tab">Log out</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Navbar;

