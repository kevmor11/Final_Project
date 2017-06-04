import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';
import axios from 'axios';

export default
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true,
      user: null
    };
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleRegistrationClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const { isLoggedIn } = this.state;
    let allRooms;
    if (this.state.user) {
      const user = this.state.user;
      allRooms = user.rooms.map((room, i))
    }

    return (
      <div>
        <Navbar currentUser={ this.state.user }/>
        <div className="field is-grouped welcome-space registerApp">
          <div className="col-log-2 optionButtons">
            <LoginButton clickHandler={this.handleLoginClick}/>
            <RegistrationButton clickHandler={this.handleRegistrationClick} />
          </div>
          {isLoggedIn ? <LoginField /> : <RegistrationFields />}
        </div>
      </div>
    )
  }
}