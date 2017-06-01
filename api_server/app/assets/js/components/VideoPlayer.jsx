import React, { Component } from 'react';


export default
class VideoPlayer extends Component {

  
  render() {
    var url = "https://youtube.com/embed/" + this.props.vid;
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allowFullScreen="true"
      />
    );
  }
}

