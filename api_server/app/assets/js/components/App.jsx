import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';
import axios from 'axios';
import http from 'http';

export default
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/api/users/1.json`)
  //     .then(res => {
  //       console.log(res.data.user);
  //       const user = res.data.user;
  //       this.setState( {user: { first_name:  user.first_name,
  //                               last_name: user.last_name,
  //                               email: user.email,
  //                               password: user.password,
  //                               gender: user.gender,
  //                               rooms: user.rooms,
  //                               posts: user.posts
  //                              }
                      
      
  //                    });
  //     });
  // }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleRegistrationClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const { isLoggedIn } = this.state;
    let allRooms;
    if (this.state.user) {
      const user = this.state.user;
      allRooms = user.rooms.map((room, i))
    }

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
            <RegistrationButton clickHandler={this.handleRegistrationClick} />
          </div>
          {isLoggedIn ? <LoginField /> : <RegistrationFields />}
        </div>
      </div>
    )
  }
}  