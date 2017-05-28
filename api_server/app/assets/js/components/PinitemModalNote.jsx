import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap';
import axios from 'axios';

export default
class PinItemModalNote extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
    }
  }

  open = () => {
      this.setState({
        showModal: true,
        postID: this.props.postID,
      });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  deletePost(){
    alert('inside deletePost')
    axios.delete('/api/rooms/1/posts/1').then(this.close.bind(this));
  }

  render() {
    return(
      <div>
        <div className="item" onClick={this.open}>
          <p className="img-title">{this.props.title}</p>
          <i className="add fa fa-sticky-note-o"></i>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <button type="submit" className="button" onClick={ this.deletePost }>Delete</button>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
