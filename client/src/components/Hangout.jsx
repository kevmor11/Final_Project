import React, { Component } from 'react';
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
        <VideoSearch />
      </div>
    );
  }
}
