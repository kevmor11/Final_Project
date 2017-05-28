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

  deletePost(){
    alert('inside deletePost')
    axios.delete(`/api/rooms/${window.location['pathname'].split('/')[2]}/posts/${this.state.postID}`)
    .then(this.close.bind(this));
  }

  render() {
    return(
      <div>
        <div className="item" onClick={this.open}>
          <p className="img-title">{this.props.title}</p>
          <i className="add fa fa-picture-o"></i>
          <img className="img-thumb" src={'http://localhost:3000/' + this.props.thumb}/>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
            <button type="submit" className="button" onClick={ this.deletePost }>Delete</button>
          </Modal.Header>
          <Modal.Body>
            <img src={'http://localhost:3000/' + this.props.img}/>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
