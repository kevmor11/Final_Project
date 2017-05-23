import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="tile is-ancestor mainboard">
          <PinboardSidebar />
          <PinboardContainer />
        </div>
      </div>
    )
  }
}
