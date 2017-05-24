import React, {Component} from 'react';

export default
class PinboardHeader extends Component {
  constructor(props){
    super(props);
    this.state = {showAddButtons:false};
  }

  handleClick = () => {
    this.setState({showAddButtons: !this.state.showAddButtons})
  }
  render(){
    let containerClass = "add-content-container";
    if(this.state.showAddButtons) containerClass += " open";

    return(
      <div>
        <header className="hangout-pinboard">
          <div className={containerClass}>
            <div className="add-content photo"><i className="add fa fa-picture-o"></i></div>
            <div className="add-content message"><i className="add fa fa-comments-o"></i></div>
            <div className="add-content note"><i className="add fa fa-sticky-note-o"></i></div>
            <div className="add-content voice-message"><i className="add fa fa-microphone"></i></div>
            <div className="add-content add-button" onClick={this.handleClick}><i className="fa fa-plus"></i></div>
          </div>
          <div className="tabs is-centered">
            <ul>
              <li><a className="is-active">Pinboard</a></li>
              <li><a>Hangout</a></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}