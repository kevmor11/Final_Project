import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';
import axios from 'axios';
import http from 'http';

export default
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false, user: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const { isLoggedIn } = this.state;

    // let userFieldInput = null;
    // if (isLoggedIn) {
    //   userFieldInput = <LoginField />;
    // } else {
    //   userFieldInput = <RegistrationFields />;
    // }

    
    return (
      <div>
        <Navbar/>
        <div className="field is-grouped welcome-space">
          <div className="col-log-2 optionButtons">
            <LoginButton clickHandler={this.handleLoginClick}/>
            <RegistrationButton clickHandler={this.handleLogoutClick} />
          </div>
          {isLoggedIn ? <LoginField /> : <RegistrationFields />}
          Hello, {this.state.user.first_name} {this.state.user.last_name} !!!
        </div>
      </div>
    )
  }
}  