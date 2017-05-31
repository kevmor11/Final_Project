import React, { Component } from 'react';

export default
class VideoThumbNail extends Component {


  createVideo = () => {
    this.props.pick(this.props.nail.id);
  }

  render() {
    return (
      <div>
        <label className="vid-thumb-title">{this.props.nail.title}</label>
        <br />
        <img
          className="thumb"
          src={this.props.nail.url}
          alt="No Image Available."
          onClick={this.createVideo}
          style={{width:'204px', height:'128px'}}
        />
      </div>
    );
  }
}
