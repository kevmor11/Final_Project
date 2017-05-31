import React, { Component } from 'react';
import Registration from './Registration.jsx';
import LoginField from './LoginField.jsx';

export default
class LoginRegister extends Component {
  render() {
    return (
      <div className="login-registration container">
        <LoginField />
        <Registration />
      </div>
    );
  }
}
