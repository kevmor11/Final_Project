import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar.jsx';
import LoginButton from './LoginButton.jsx';
import RegistrationButton from './RegistrationButton.jsx';
import LoginField from './LoginField.jsx';
import RegistrationFields from './RegistrationFields.jsx';
export default
class App extends Component {
  static propTypes = {
    foo: PropTypes.string
  }

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.foo = "bar";
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <h2>Pinboard app is here</h2>
      </div>
    );
  }
}

// class ExtendedApp extends App {
//   render() {
//     const inner = super.render(); // calls render in <App />
//     return <div id="wrapped">{inner}</div>;
//   }
// }