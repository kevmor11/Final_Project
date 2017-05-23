import React, {Component} from 'react';
import Registration from './Registration.jsx';

export default
class LoginField extends Component { 
  render(){
    return (
      <div className="col-lg-6">
          <form action="route" method="POST" className="login">
            <h1 className="title">Login here</h1>
            <h2 className="subtitle">Enter your Email and Password </h2>
            <div className="field">
              <label htmlFor="name" className="label">Email</label>
              <p className="control">
                <input className="input" type="email" id="name" placeholder="Email" />
              </p>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <p className="control">
                <input className="input" type="password" id="password" placeholder="Password"/>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary">Login</button>
              </p>
            </div>
          </form>
      </div>
    )
  }
}