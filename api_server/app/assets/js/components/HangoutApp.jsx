import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';


export default
class HangoutApp extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h3>Hello world hangout</h3>
      </div>
    );
  }
}
