import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import Registration from './Registration.jsx'
export default
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }



  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }



    function LoginGreeting(props) {
      return (
      <div>
      <h1>Hello User</h1>
      
      <LoginField />
      </div>
      );
    } 
    function RegistrationGreeting(props) {
      return <Registration />
    } 

    function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <LoginGreeting />;
      }
      return <RegistrationGreeting />;
    }

    function LoginButton(props) {
      return (
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }





    return (
      <div>
        <Navbar/>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
        <div className="field is-grouped welcome-space">
        <LoginButton/>
        <RegistrationButton />
        </div>
      </div>
    )
  }
}  