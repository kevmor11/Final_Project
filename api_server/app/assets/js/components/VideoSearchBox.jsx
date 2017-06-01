import React, { Component } from 'react';

export default
class VideoSearchBox extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchString: '',
      };
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      this.doSearch();
    }
  }

  updateText = (e) => {
    this.setState({ searchString: e.target.value });
  }

  doSearch = (e) => {
    var string = document.getElementById('query').value;
    this.props.doSearch(string);
  }

  render() {
    return (
      <div>
        <strong className="search-header">Search for a Video</strong>
        <div className="content search">
          <label>
            <input id="query" className="input" value={this.state.searchString} type="text" onChange={this.updateText} onKeyPress={this.enterKeyPress} />
            <button id="search-button" className="button search search-button" onClick={this.doSearch} >Search</button>
          </label>
        </div>
      </div>
    );
  }
}
