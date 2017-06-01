import React, { Component } from 'react';
import IFrameVideoApi from 'youtube-iframe';


export default
class VideoPlayer extends Component {
  constructor() {
    super();
    var player;
    IFrameVideoApi.load(() => {
      player = new YT.Player('video-player', {
        events: {
          // 'onReady': (n) => this.player.playVideo(),
          'onStateChange': this.onPlayerStateChange,
        }
      });
    });
  }

  onPlayerStateChange = (event) => {
    switch(event.data) {
      case 1:
        console.log("Video Playing");
        break;
      case 2:
        console.log("Video Paused");
        break;
      default:
        console.log("OTHER STATE");
    }
  }

  // if(this.props.play === 1) {
  //   this.player.playVideo()
  // } else {
  //   this.player.pauseVideo()
  // }

  onClickPlay = (e) => {
    e.target.playVideo()
  }

  onClickVideo = (e) => {
    this.props.simulate(document.getElementById("video-player"), "click");

  }

  render() {
    const url = "https://www.youtube.com/embed/" + this.props.vid + "?enablejsapi=1";
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="1"
        allowFullScreen="true"
        className="youtube-player"
        onClick={this.onClickVideo}
        id="video-player"
      />
    );
  }
}

