import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginRegister from './LoginRegister.jsx'
export default
class App extends Component {

  render() {
    let loginRegister = <LoginRegister />;
    let  loginNavbar = <Navbar/>;
    return (
      <div>
        {loginNavbar}
        {loginRegister}
      </div>
    )
  }
} 