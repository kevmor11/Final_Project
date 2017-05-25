import React, {Component} from 'react';
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
        <div className="components-container">
          <div className="item fa fa-picture-o">
            <p>This is card 3</p>
          </div>
          <div className="item">
            <p>This is card 2</p>
          </div>
          <div className="item">
            <p>This is card 3</p>
          </div>
          <div className="item">
            <p>This is card 4</p>
          </div>
          <div className="item">
            <p>This is card 5</p>
          </div>
          <div className="item">
            <p>This is card 6</p>
          </div>
        </div>
        <PopupNote isActive={this.props.openModal === 'note'} />
        <PopupLink isActive={this.props.openModal === 'link'} />
        <PopupImage isActive={this.props.openModal === 'image'} />

      </div>
    )
  }
}