import React, {Component} from 'react';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class Pinboard extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = { openModal: '' };
  }

  render(){
    return (
    <div>
      <div className="tile is-ancestor mainboard">
        <PinboardSidebar />
        <PinboardContainer openModal={this.state.openModal} userData={this.props.userData}/>
      </div>
    </div>
    )
  }
}