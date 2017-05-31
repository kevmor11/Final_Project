import React, {Component} from 'react';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

export default
class PinItemModalImage extends Component {

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
          <i className="add fa fa-picture-o"></i>
          <img className="img-thumb" src={this.props.thumb}/>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.img}/>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
