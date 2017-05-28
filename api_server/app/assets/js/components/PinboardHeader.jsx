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
    console.log('propppppppppppppnnndslfkwe', this.props.userData);
    return(
      <div>
        <header className="hangout-pinboard">
          <div className={containerClass}>
            <div className="add-content photo" onClick={this.openImage}><i className="add fa fa-picture-o"></i></div>
            <div className="add-content message" onClick={this.openLink}><i className="add fa fa-link"></i></div>
            <div className="add-content note"  onClick={this.openNote}><i className="add fa fa-sticky-note-o"></i></div>
            <div className="add-content add-button" onClick={this.handleClick}><i className="fa fa-plus"></i></div>
          </div>
          <div className="tabs is-centered">
            <ul>
              <li><a className="is-active">Pinboard</a></li>
              <li><a>Hangout</a></li>
            </ul>
          </div>
        </header>
        <PopupNote isActive={this.state.showModalNote} onClose={this.close} userData={this.props.userData}/>
        <PopupLink isActive={this.state.showModalLink} onClose={this.close} />
        <PopupImage isActive={this.state.showModalImage} onClose={this.close} />

      </div>
    )
  }
}
