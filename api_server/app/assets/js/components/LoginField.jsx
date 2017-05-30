import React, {Component} from 'react';
import axios from 'axios';

export default
class LoginField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  submitForm(event) {
    axios.post('/api/sessions', {
      email: this.state.email,
      password: this.state.password
    }).then(this.handleRedirect);
  }

  handleRedirect(res) {
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
      </div>
    );
  }
}
