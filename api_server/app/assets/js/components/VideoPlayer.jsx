import React, { Component } from 'react';
import ActionCable from 'actioncable';

export default
class VideoPlayer extends Component {

  componentDidMount() {
    this.setSubscription();

    setTimeout(() => {
      this.channel.playVideo();
    }, 5000);
  }

  componentWillUnmount() {
    if(!this.cable) { return; }
    this.cable.disconnect();
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

      },
      playVideo: function() {
        console.log('playvideo');
        this.perform('speak', {});
      }
    });

  }

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

