import React, {Component} from 'react';
import Logo from './Logo.jsx';

export default
class NavbarLeft extends Component {

  profileHomeClick = () => {
    window.location.href = `/users/${this.props.user.id}`
  }

  render() {
    if ( this.props.user !== null) {
      return (
        <div className="nav-left">
          <a className="nav-item is-tab is-hidden-mobile is-active">
            <span className="icon">
              <i className="fa fa-home" onClick={this.profileHomeClick}></i>
            </span>
          </a>
        </div>
      )
    } else {
      return( <div></div>);
    }
  }
}
