import React, { Component } from 'react';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class Pinboard extends Component {
  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: props.userData,
    };
  }

  render() {
  console.log("KEVIN", this.props);
  console.log("HEY", this.state);
    return (
      <div>
        <div className="tile is-ancestor mainboard">
          <PinboardSidebar
            room={this.props.room}
            refreshRoom={this.props.refreshRoom}
          />
          <PinboardContainer
            updatePinboardApp={this.props.updatePinboardApp}
            // TODO don't pass in this.state
            userData={this.state}
            roomName={this.props.room.name}
            roomID={this.props.room.id}
            room={this.props.room}
            posts={this.props.posts}
          />
        </div>
      </div>
    );
  }
}
