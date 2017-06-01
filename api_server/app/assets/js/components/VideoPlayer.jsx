import React, { Component } from 'react';
import IFrameVideoApi from 'youtube-iframe';

export default
class VideoPlayer extends Component {
  constructor() {
    super();

    IFrameVideoApi.load(() => {
      this.player = new YT.Player('video-player', {
        events: {
          'onReady': () => this.player.playVideo(),
          'onStateChange': () => console.log('yt state changed')
        }
      });
    });

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

