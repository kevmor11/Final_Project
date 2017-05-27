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
          <button className="button is-primary" onClick={this.openBroadcast}>Watch a Video<i class="fa fa-youtube-play" aria-hidden="true"></i></button>
        }
        { this.state.videoChat === true &&
          <VideoChat />
        }
        { this.state.streamVideo === false &&
          <button className="button is-primary" onClick={this.openStream}>Watch a Video<i class="fa fa-youtube-play" aria-hidden="true"></i></button>
        }
        { this.state.streamVideo === true &&
          <VideoSearch />
        }
      </div>
    );
  }
}
