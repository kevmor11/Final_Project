import React, {Component} from 'react';
import axios from 'axios';

export default
class UserLogoutButton extends Component {

  logOutClick = () => {
    axios.delete(`/api/sessions/${this.props.user.id}`).then(this.handleRedirectToLogin);
  }

  handleRedirectToLogin = () => {
    window.location.href = '/';
  }

  render() {
    if ( this.props.user !== null) {
      return(
        <div className="nav-item is-tab">
          <div className="nav-item is-tab">
            Welcome { this.props.user.first_name }!
          </div>
          <a className="control nav-item is-tab logoutButton" onClick={ this.logOutClick }>Log out</a>
        </div>
      )
    } else {
      return( <div></div>);
    }
  }
}