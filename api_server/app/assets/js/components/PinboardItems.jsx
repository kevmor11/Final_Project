import React, {Component} from 'react';
import PinboardItemRequest from './PinboardItemRequest.jsx'
import PropTypes from 'prop-types';

export default
class PinboardItems extends Component {

  static propTypes = {
    openModal: PropTypes.string
  }

  render(){
    return(
      <div>
        <PinboardItemRequest userData={this.props.userData}/>
      </div>
    )
  }
}