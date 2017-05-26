import React, {Component} from 'react';
import PinboardItemRequest from './PinboardItemRequest.jsx'
import PopupNote from './PopupNote.jsx'
import PopupLink from './PopupLink.jsx'
import PopupImage from './PopupImage.jsx'
import PropTypes from 'prop-types';

export default
class PinboardItems extends Component {

  static propTypes = {
    openModal: PropTypes.string
  }

  render(){
    return(
      <div>
        <PinboardItemRequest />
        <PopupNote isActive={this.props.openModal === 'note'} onClose={() => this.props.onClose()}/>
        <PopupLink isActive={this.props.openModal === 'link'} onClose={() => this.props.onClose()} />
        <PopupImage isActive={this.props.openModal === 'image'} onClose={() => this.props.onClose()} />
      </div>
    )
  }
}