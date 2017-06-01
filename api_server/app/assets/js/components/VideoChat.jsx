import React, { Component } from 'react';
// import AppearIn from 'appearin-sdk';

export default
class VideoChat extends Component {

  render() {
    // var appearin = new AppearIn();
    // var room_name = "";
    return (
      <div>
        {/*{ appearin.getRandomRoomName(function(err, roomName){
            room_name = roomName;
          })
        }*/}
        <iframe src={"//appear.in/" + this.props.roomName + "-" + this.props.roomID} frameBorder="0" allowFullScreen="true" id="iframe" />
      </div>
    );
  }
}


