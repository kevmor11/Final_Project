import React, { Component } from 'react';
import Messenger from './Messenger.jsx';
import VideoChat from './VideoChat.jsx';
import VideoSearch from './VideoSearch.jsx';
import ActionCable from 'actioncable';

export default
class Hangout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamVideo: false,
      videoChat: false,
      currentVideo: ""
    };
  }

  simulate = (element, eventName) => {
    console.log("KEVIN");
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
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


  renderForAll = (vid) => {
    this.setState({currentVideo: vid, streamVideo: true});
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
        this.renderForAll(data.video);
      },
      loadVideo: function(id) {
        this.perform('load', { video: id }, () => {
          this.updateVideo(id);
        });
      }
    });
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
          <VideoSearch currentVideo={this.state.currentVideo} pickVideo={this.pickVideo} simulate={this.simulate} />
        }
      </div>
    );
  }
}
