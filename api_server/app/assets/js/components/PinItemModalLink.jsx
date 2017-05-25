import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

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

  render() {
    return(
      <div>
        <div className="item" onClick={this.open}>
          <p className="img-title">{this.props.title}</p>
          <i className="add fa fa-link"></i>
          {/*<img className="img-thumb" src={'http://localhost:3000/' + this.props.thumb}/>*/}
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={this.props.link}>{this.props.link}</a>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
