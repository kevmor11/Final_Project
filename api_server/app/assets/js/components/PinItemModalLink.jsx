import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap';
import axios from 'axios';

export default
class PinItemModalLink extends Component {

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

  onClickDeletePost = () => {
    this.props.deletePost(this.props.postID);
  }
  // deletePost = () => {
  //   axios.delete(`/api/rooms/${this.props.roomID}/posts/${this.props.postID}`)
  //     .then(this.props.refreshRoom);
  // }

  render() {
    console.log('jinnnnnnny', this.props.postID);
    return(
      <div>
        <a><i className="fa fa-trash-o" onClick={this.onClickDeletePost}></i></a>
        <div className="item-container" onClick={this.open}>
          <p className="item img-title">{this.props.title}</p>
          <hr />
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={this.props.link}>{this.props.link}</a>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <p>By: {this.props.name}</p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
