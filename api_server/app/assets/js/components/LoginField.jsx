import React, {Component} from 'react';
import AlertContainer from 'react-alert'
import axios from 'axios';

export default
class LoginField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  alertOptions = {
    offset: 255,
    position: 'top right',
    theme: 'dark',
    time: 8000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Sorry, your Email or Password did not match our records. Please try again or Register.', {
      type: 'error',
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      this.submitForm();
    }
  }

  submitForm = (event) => {
    axios.post('/api/sessions', {
      email: this.state.email,
      password: this.state.password
    }).then(this.handleRedirect)
      .catch(this.showAlert);
  }

  handleRedirect = (res) => {
    window.location.href = `/users/${res.data.user.id}`;
  }

  render(){
    return (
      <div className="col-lg-6">
        <div className="login">
          <h1 className="title">Login here</h1>
          <h2 className="subtitle">Enter your Email and Password </h2>
          <div className="field">
            <label htmlFor="name" className="label">Email</label>
            <p className="control">
              <input
                className="input"
                type="email" id="name"
                name="email" value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email"
                onKeyPress={this.enterKeyPress}
              />
            </p>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <p className="control">
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
                onKeyPress={this.enterKeyPress}
              />
            </p>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <button
                type="submit"
                className="button is-primary"
                onClick={this.submitForm}
              >Login
              </button>
            </p>
          </div>
        </div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
