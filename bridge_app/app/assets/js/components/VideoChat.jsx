import React, { Component } from 'react';
// import AppearIn from 'appearin-sdk';

export default
class VideoChat extends Component {

  render() {
    return (
      <div>
        <iframe src={"//appear.in/" + this.props.roomName + "-" + this.props.roomID} frameBorder="0" allowFullScreen="true" id="iframe" />
      </div>
    );
  }
}


