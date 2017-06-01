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

  onClickDeletePost = () => {
    this.props.deletePost(this.props.postID);
  }

  render() {
    return(
      <div className="item-div">
        <a><i className="fa fa-trash-o" onClick={this.onClickDeletePost}></i></a>
        <div className="item-container" onClick={this.open}>
          <h4><b className="item">{this.props.title}</b></h4>
          <hr/>
          <p className="item">{this.props.description}</p>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

