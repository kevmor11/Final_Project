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
          <button className="button hover logoutButton" onClick={ this.logOutClick }>Log out</button>
        </div>
      )
    } else {
      return( <div></div>);
    }
  }
}