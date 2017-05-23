import React, {Component} from 'react';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class App extends Component { 
  render(){
    return (
    <div>
      <div className="tile is-ancestor mainboard">
        <PinboardSidebar />
        <PinboardContainer />
      </div>
    </div> 
    )
  }
}