import React, { Component } from 'react';
import VideoThumbnail from './VideoThumbnail.jsx';

export default
class VideoThumbnailList extends Component {

  render() {
    var allNails = this.props.nails.map((nail, i) => {
      return (<VideoThumbnail key={i} nail={nail} pick={this.props.pick} />);
    });
    return (
      <div>
        {allNails}
      </div>
    );
  }
}
