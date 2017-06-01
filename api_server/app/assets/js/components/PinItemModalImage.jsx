import React, {Component} from 'react';
// import {Card, CardTitle, CardPanel} from 'react-materialize'
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

  onClickDeletePost = () => {
    this.props.deletePost(this.props.postID);
  }

  render() {
    return(
      <div className="item-div">
        <a><i className="fa fa-trash-o" onClick={this.onClickDeletePost}></i></a>
        <div className="item-container" onClick={this.open}>
          <h4><b className="item img-title">{this.props.title}</b></h4>
          <img className="image-thumb" src={this.props.thumb} alt="Avatar"/>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-image" src={this.props.img}/>
            <p className="image-desc">{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <p>By: {this.props.name}</p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
