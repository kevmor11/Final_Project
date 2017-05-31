import React, { Component } from 'react';

export default
class VideoThumbNail extends Component {


  createVideo = () => {
    this.props.pick(this.props.nail.id);
  }

  render() {
    return (
      <div className="youtube-thumbnail" onClick={this.createVideo}>
        <label className="vid-thumb-title">{this.props.nail.title}</label>
        <img
          className="thumb"
          src={this.props.nail.url}
          alt="No Image Available."
          style={{width:'204px', height:'128px'}}
        />
      </div>
    );
  }
}
