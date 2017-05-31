import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap'

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

  render() {
    return(
      <div>
        <div className="item" onClick={this.open}>
          <p className="img-title">{this.props.title}</p>
          <i className="add fa fa-sticky-note-o"></i>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.content}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
