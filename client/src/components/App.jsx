import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';

export default
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
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
        </div>
      </div>
    )
  }
}  