import React, { Component } from 'react';
import VideoSearchBox from './VideoSearchBox.jsx';
import VideoThumbnailList from './VideoThumbnailList.jsx';
import VideoPlayer from './VideoPlayer.jsx';

export default
class VideoSearch extends Component {

  constructor(props) {
      super(props);
      this.state = {
        thumbnails: [],
        currentVideo: "",
      }
  }

  searchAndShow = (searchString) => {

    gapi.client.setApiKey('AIzaSyCSsxTJF9KYHmuDbYt8TACQGF2wztIS7Zo');
    gapi.client.load('youtube', 'v3', () => {
      // console.log("YT api loaded");
      var request = gapi.client.youtube.search.list({
        q: searchString,
        part: 'snippet',
        maxResults: 10,
        // startIndex: 0,
      });
      request.execute((response) => {
        // console.log(response);
        var srchItems = response.result.items;
        var relevantData = srchItems.map((item) => { return {
          title: item.snippet.title,
          url: item.snippet.thumbnails.default.url,
          id: item.id.videoId
        }});
        // console.log("irrelephant", relevantData);
        this.setState({thumbnails: relevantData});

        // console.log("gapi request finished, I guess");

      });
    });
  }

  pickVideo = (vid) => {
    this.setState({currentVideo: vid});
  }

  render() {
    var doBox = !this.state.currentVideo;
    var doNails = (this.state.thumbnails.length > 0) && (!this.state.currentVideo);
    var doVid = this.state.currentVideo;
    return (
      <div>
        {doBox   ? ( <VideoSearchBox doSearch={this.searchAndShow} color={this.state.color} /> ) : ""}
        {doNails ? ( <VideoThumbnailList nails={this.state.thumbnails} pick={this.pickVideo} /> ) : ""}
        {doVid   ? ( <VideoPlayer vid={this.state.currentVideo} /> ) : ""}
      </div>
    );
  }
}
