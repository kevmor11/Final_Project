import React, { Component } from 'react';
import IFrameVideoApi from 'youtube-iframe';

export default
class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    IFrameVideoApi.load(() => {
      this.player = new YT.Player('video-player', {
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
        }
      });
    });
  }

  onPlayerStateChange (event){
    this.props.onPlayerStateChange(event.data);
  }

  onClickPlay = (e) => {
    e.target.playVideo()
  }
  componentDidUpdate(prevProps){
    // If there is a difference between old state and new state.
    if(prevProps.playerState !== this.props.playerState && this.player !== undefined){
      console.log("PROPS CHANGED", this.props.playerState);
      // Do something based on change.
      switch(this.props.playerState){
        case 1: this.player.playVideo(); break;
        case 2: this.player.pauseVideo(); break;
        default: break;
      }
    }
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
        id="video-player"
      />
    );
  }
}

