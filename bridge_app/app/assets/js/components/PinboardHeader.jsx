import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PopupNote from './PopupNote.jsx'
import PopupLink from './PopupLink.jsx'
import PopupImage from './PopupImage.jsx'
import {Modal, Popover, OverlayTrigger} from 'react-bootstrap'

export default
class PinboardHeader extends Component {
  static propTypes = {
    modalToggle: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {
      showModalNote: false,
      showModalLink: false,
      showModalImage: false,
    };
  }

  close = () => {
    this.setState({
      showModalNote: false,
      showModalLink: false,
      showModalImage: false
    });
  }

  openNote = () => {
    this.setState({ showModalNote: true });
  }

  openLink = () => {
    this.setState({ showModalLink: true });
  }

  openImage = () => {
    this.setState({ showModalImage: true });
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
            <div className="add-content photo add" onClick={this.openImage}><i className="add fa fa-picture-o"></i></div>
            <div className="add-content message add" onClick={this.openLink}><i className="add fa fa-link"></i></div>
            <div className="add-content note add"  onClick={this.openNote}><i className="add fa fa-sticky-note-o"></i></div>
            <div className="add-content add-button" onClick={this.handleClick}><i className="fa fa-plus"></i></div>
          </div>
          <div className="tabs is-centered">
            <ul>
              <li><button className="button hover pinboardButton" onClick={this.props.handlePinboardClick}>Pinboard</button></li>
              <li><button className="button hover hangoutButton" onClick={this.props.handleHangoutClick}>Hangout</button></li>
            </ul>
          </div>
        </header>
        <PopupNote refreshRoom={this.props.refreshRoom} isActive={this.state.showModalNote} onClose={this.close} roomID={this.props.roomID} />
        <PopupLink refreshRoom={this.props.refreshRoom} isActive={this.state.showModalLink} onClose={this.close} roomID={this.props.roomID} />
        <PopupImage refreshRoom={this.props.refreshRoom} isActive={this.state.showModalImage} onClose={this.close} roomID={this.props.roomID} />
      </div>
    )
  }
}