import React, { Component } from 'react';
import Messenger from './Messenger.jsx';
import VideoChat from './VideoChat.jsx';
import VideoSearch from './VideoSearch.jsx';

export default
class Hangout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <VideoChat />
        <Messenger />
        <VideoSearch />
      </div>
    );
  }
}
