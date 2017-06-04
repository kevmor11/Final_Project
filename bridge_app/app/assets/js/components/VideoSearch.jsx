import React, { Component } from 'react';
import VideoSearchBox from './VideoSearchBox.jsx';
import VideoThumbnailList from './VideoThumbnailList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Script from 'react-load-script';

export default
class VideoSearch extends Component {

  constructor(props) {
      super(props);
      this.state = {
        thumbnails: [],
      }
  }

  searchAndShow = (searchString) => {
    gapi.client.setApiKey('AIzaSyCSsxTJF9KYHmuDbYt8TACQGF2wztIS7Zo');
    gapi.client.load('youtube', 'v3', () => {
      var request = gapi.client.youtube.search.list({
        q: searchString,
        part: 'snippet',
        maxResults: 12,
      });
      request.execute((response) => {
        var srchItems = response.result.items;
        var relevantData = srchItems.map((item) => { return {
          title: item.snippet.title,
          url: item.snippet.thumbnails.default.url,
          id: item.id.videoId
        }});
        this.setState({thumbnails: relevantData});
      });
    });
  }


  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError = () => {
    this.setState({ scriptError: true })
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
  }

  render() {
    var doBox = !this.props.currentVideo;
    var doNails = (this.state.thumbnails.length > 0) && (!this.props.currentVideo);
    var doVid = this.props.currentVideo;
    return (
      <div>
        <Script url="https://apis.google.com/js/client.js?onload=googleApiClientReady"
                onCreate={this.handleScriptCreate}
                onError={this.handleScriptError}
                onLoad={this.handleScriptLoad}/>

        {doBox   ? ( <VideoSearchBox doSearch={this.searchAndShow} color={this.state.color} /> ) : ""}
        {doNails ? ( <VideoThumbnailList nails={this.state.thumbnails} pick={this.props.pickVideo} /> ) : ""}
        {doVid   ? ( <VideoPlayer playerState={this.props.playerState} onPlayerStateChange={this.props.onPlayerStateChange} playVideo={this.props.playVideo} play={this.props.play} vid={this.props.currentVideo} simulate={this.props.simulate} /> ) : ""}
      </div>
    );
  }
}
