import React, { Component } from 'react';
import PinboardSidebar from './PinboardSidebar.jsx'
import PinboardContainer from './PinboardContainer.jsx'

export default
class Pinboard extends Component {
  render() {
    return (
      <div>
        <div className="tile is-ancestor mainboard">
          <PinboardSidebar
            room={this.props.room}
            refreshRoom={this.props.refreshRoom}
          />
          <PinboardContainer
            updatePinboardApp={this.props.updatePinboardApp}
            user={this.props.user}
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
