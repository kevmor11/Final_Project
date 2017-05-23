import React, { Component } from 'react';

export default
class VideoSearchBox extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchString: 'cat',
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
        <h2>Search</h2>
        <label>
          <input id="query" value={this.state.searchString} type="text" onChange={this.updateText} onKeyPress={this.enterKeyPress} />
          <button id="search-button" onClick={this.doSearch} >Search</button>
        </label>
      </div>
    );
  }
}