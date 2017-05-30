import React, { Component } from 'react';
import Messenger from './Messenger.jsx';
import VideoChat from './VideoChat.jsx';
import VideoSearch from './VideoSearch.jsx';

export default
class Hangout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamVideo: false,
      videoChat: false
    };
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

  render() {
    return (
      <div>
        <Messenger />
        { this.state.videoChat === false &&
          <button className="button is-primary" onClick={this.openBroadcast}>Broadcast <i className="fa fa-video-camera" aria-hidden="true"></i></button>
        }
        { this.state.videoChat === true &&
          <VideoChat roomName={this.props.roomName} roomID={this.props.roomID}/>
        }
        { this.state.streamVideo === false &&
          <button className="button is-primary" onClick={this.openStream}>Watch a Video <i className="fa fa-youtube-play" aria-hidden="true"></i></button>
        }
        { this.state.streamVideo === true &&
          <VideoSearch />
        }
      </div>
    );
  }
}
