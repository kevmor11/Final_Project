import React, {Component} from 'react';
import axios from 'axios';
import http from 'http';

export default
class Registration extends Component { 

  constructor(props){
    super(props);
    this.state = { first_name: "",
                   last_name: "",
                   email: "",
                   password: "",
                   gender: ""
                 }  
    this.handleRegistrationChange =this.handleRegistrationChange.bind(this);
  }


  handleRegistrationChange = (e) => {
    const name = e.target.name;    
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleRegistrationSubmit = (e) => {
    if (this.state.gender === "Other" || this.state.gender === "Prefer Not to Say") {
      this.state.gender = "n/a";
    }
    e.preventDefault();
    axios.post('http://localhost:3000/api/users', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    });
  }

  render(){
    return (
        <div className="col-lg-6">
          <form action="/" method="POST" className="registration" onSubmit={this.handleRegistrationSubmit}>
            <h1 className="title">Sign Up here</h1>
            <h2 className="subtitle">Join in and bridge with your loved ones </h2>
            <div className="field">
              <label htmlFor="first-name" className="label">Firstname</label>
              <p className="control">
                <input className="input" type="text" name="first_name" id="first-name" 
                value={this.state.first_name} onChange={this.handleRegistrationChange} placeholder="First Name"/>
              </p>
            </div>
            <div className="field">
              <label htmlFor="last-name" className="label">Last Name</label>
              <p className="control">
                <input className="input" type="text" name="last_name" id="last-name" 
                value={this.state.last_name} onChange={this.handleRegistrationChange} placeholder="Last Name"/>
              </p>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <p className="control">
                <input className="input" type="email" name="email" id="email" 
                value={this.state.email} onChange={this.handleRegistrationChange} placeholder="Email"/>
              </p>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <p className="control">
                <input className="input" type="password" name="password" id="password" 
                value={this.state.password} onChange={this.handleRegistrationChange} placeholder="Password"/>
              </p>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <p className="control">
                <span className="select">
                  <select name="gender" value={this.state.gender} onChange={this.handleRegistrationChange}>
                    <option value="" disabled>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer Not to Say</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button  className="button is-primary">Register</button>
              </p>
            </div>
          </form>
        </div>
      )
    }
  
}
