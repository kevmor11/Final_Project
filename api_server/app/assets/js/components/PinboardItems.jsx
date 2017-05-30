import React, {Component} from 'react';
import PinboardItemRequest from './PinboardItemRequest.jsx'
import PropTypes from 'prop-types';

export default
class PinboardItems extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    
    this.state = {
      roomAxiosData:props.roomAxiosData
    }
  }

  static propTypes = {
    openModal: PropTypes.string
  }

  render() {
    return(
      <div className="container">
        <PinboardItemRequest post={this.props.posts} roomID={this.props.roomID} userData={this.props.userData} roomAxiosData={this.props.roomAxiosData}/>
      </div>
    )
  }
}