import React, { Component } from 'react';
import IFrameVideoApi from 'youtube-iframe';


export default
class VideoPlayer extends Component {
  constructor() {
    super();

    IFrameVideoApi.load(() => {
      this.player = new YT.Player('video-player', {
        events: {
          // 'onReady': (n) => this.player.playVideo(),
          'onStateChange': () => this.response(state),
        }
      });
    });
  }

  response = (state) => {
    console.log("WE MADE IT", state);
    // if (state === 1) {
    //   console.log("PLAYING")
    // }
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

