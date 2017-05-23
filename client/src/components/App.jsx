import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx'
import RegistrationButton from './RegistrationButton.jsx'
export default
class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.state = {loginIn: true};
  }
      handleLoginClick() {
        this.setState({loginIn:true})
      }
    
      handleRegisterClick() {
        this.setState({loginIn:false})
      }
      

  render() {
    const loginIn = this.state.loginIn;
    let inputFields = null; 
    if (loginIn) {
      inputFields = <LoginButton onClick={this.handleLoginClick}/>
    } else {
      inputFields = <RegistrationButton onClick={this.handleRegisterClick}/>
    }
    return (
      <div>
        <Navbar/>
        <div className="field is-grouped welcome-space" loginIn={loginIn}>
              {inputFields}
        </div>
      </div>
    )
  }
} 