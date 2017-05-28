import React, { Component } from 'react';
import AppearIn from 'appearin-sdk';

export default
class VideoChat extends Component {

  render() {
    var appearin = new AppearIn();
    var room_name = "";
    return (
      <div>
        { appearin.getRandomRoomName()
          .then(function (roomName) {
            room_name = roomName;
          });
        }
        <iframe src={"https://appear.in/" + room_name} width="800" height="640" frameborder="0" id="iframe-element"></iframe>
      </div>
    );
  }
}


