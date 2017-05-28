import React, {Component} from 'react';
import PinboardItemRequest from './PinboardItemRequest.jsx'
import PropTypes from 'prop-types';

export default
class PinboardItems extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
  }

  static propTypes = {
    openModal: PropTypes.string
  }

  render() {
    return(
      <div>
        <PinboardItemRequest roomID={this.props.roomID} userData={this.props.userData} />
      </div>
    )
  }
}