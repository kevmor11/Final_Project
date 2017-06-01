import React, { Component } from 'react';
import Messenger from './Messenger.jsx';
import VideoChat from './VideoChat.jsx';
import VideoSearch from './VideoSearch.jsx';
import ActionCable from 'actioncable';
import IFrameVideoApi from 'youtube-iframe';


export default
class Hangout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamVideo: false,
      videoChat: false,
      currentVideo: "",
      play: 0,
      playerState: 0,
    };

    // var player;
    // IFrameVideoApi.load(() => {
    //   player = new YT.Player('video-player', {
    //     events: {
    //       'onStateChange': this.onPlayerStateChange,
    //     }
    //   });
    // });

  }

  openBroadcast = () => {
      this.setState({
      videoChat: true,
    });
  }

  closeBroadcast = () => {
    this.setState({
      videoChat: false
    });
  }

  openStream = () => {
      this.setState({
      streamVideo: true,
    });
  }

  closeStream = () => {
    this.setState({
      streamVideo: false
    });
  }

  pickVideo = (vid) => {
    this.setState({currentVideo: vid}, () => {
      this.channel.loadVideo(vid);
    });
  }

  // playVideo = (n) => {
  //   this.setState({play: n}, () => {
  //     console.log('ABOUT TO PLAY');
  //     this.channel.playVideo(n);
  //   })
  // }

  renderForAll = (vid) => {
    this.setState({currentVideo: vid, streamVideo: true});
  }

  playForAll = (serverValue) => {
    console.log("PLAYING FOR ALL");
    this.setState({playerState: serverValue});
  }

  componentDidMount() {
    this.setSubscription();
  }

  componentWillUnmount() {
    if(!this.cable) { return; }
    this.cable.disconnect();
  }

  handshake(type) {

  }

  setSubscription() {
    console.log('setting subscription ', ActionCable);
    this.cable = ActionCable.createConsumer();
    this.channel = this.cable.subscriptions.create("VideoChannel", {
      connected: () => {
        console.log('connected')
      },
      disconnected: (e) => {
        console.log('disconnected', e)
      },
      received: (data) => {
        console.log("HERE BE DATA....  ", data);
        // TODO: setState based on incoming socket message.
        // if there is a message that says play video or pause video,
      // this.setState({playerState: /* Your new player state */})

        if (data.video) {
          this.renderForAll(data.video);
        }
        if (data.play) {
          this.playForAll(data.play);
        }
      },
      loadVideo: function(id) {
        this.perform('load', { video: id });
      },
      playVideoSocket: function(n) {
        console.log("N IN PLAY VIDEO SOCKET IS: ", n);
        this.perform('play', { play: n });
      }
    });
  }
  onPlayerStateChange = (playerState) => {
    console.log("--PLAYERSTATE--", playerState);
    console.log("--EVENT.DATA-- ", event.data);
    switch(playerState) {
      case 1:
        console.log("Video Playing");
        this.channel.playVideoSocket(1);
        break;
      case 2:
        console.log("Video Paused");
        this.channel.playVideoSocket(2);
        break;
      default:
        console.log("OTHER STATE");

      this.setState({playerState });
      // TODO: Send a socket message of play or pause.
    }
  }

  render() {
    return (
      <div className="hangout-container container">
        <Messenger />
        { this.state.videoChat === false &&
          <button className="button hover video-chat" onClick={this.openBroadcast}>Video Chat<i className="fa fa-video-camera" aria-hidden="true"></i></button>
        }<br/>
        { this.state.videoChat === true &&
          <VideoChat roomName={this.props.roomName} roomID={this.props.roomID}/>
        }
        { this.state.streamVideo === false &&
          <button className="button hover youtube" onClick={this.openStream}>Watch a Video<i className="fa fa-youtube-play" aria-hidden="true"></i></button>
        }
        { this.state.streamVideo === true &&
          <VideoSearch playerState={this.state.playerState} onPlayerStateChange={this.onPlayerStateChange.bind(this)} play={this.state.play} currentVideo={this.state.currentVideo} pickVideo={this.pickVideo} simulate={this.simulate} />
        }
      </div>
    );
  }
}
